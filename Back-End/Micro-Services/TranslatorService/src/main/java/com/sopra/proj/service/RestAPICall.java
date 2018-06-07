package com.sopra.proj.service;
import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.HttpsURLConnection;

import com.google.gson.Gson;

/**
 * This class contains all of the functions that are used to do HTTP request to
 * the Microsoft Translator API.
 *
 * @author badurand
 * @since 1.0
 */
public class RestAPICall {

    private static final String SUBSCRIPTION_KEY = "bdd86063bb334671881bf05bdb10ac00";
    private static final String HOST = "https://api.cognitive.microsofttranslator.com";
    private static final String HOST2 = "http://api.microsofttranslator.com/v2/Http.svc/Translate?Text=";
    private static final String PATH = "api-version=3.0";
    private static final String PR_ENTOFR_ID = "66d3b2a5-6e55-4fc4-b943-f7fac133dfd4_GENERAL";
    private static final String PR_ENTOES_ID = "66d3b2a5-6e55-4fc4-b943-f7fac133dfd4_GENERAL";

    /**
     * This function returns the ID of the Microsoft Translator Hub project that
     * has to be called by the API
     *
     * @param src The source language
     * @param dst The destination language
     * @return The project ID to call the Microsoft Translator Hub project
     */
    @SuppressWarnings("unused")
    private static String getProjectId(Language src, Language dst) {
        switch (src) {
            case ENGLISH:
                switch (dst) {
                    case FRENCH:
                        return PR_ENTOFR_ID;
                    case SPANISH:
                        return PR_ENTOES_ID;
                    default:
                        return null;
                }
            default:
                return null;
        }
    }

    /**
     * An internal private class that contains the body of an HTTP request.
     *
     * @author badurand
     * @since 1.0
     */
    private static class RequestBody {

        @SuppressWarnings("unused")
        String Text;

        /**
         * The setter function
         *
         * @param text The text of the request
         */
        public RequestBody(String text) {
            this.Text = text;
        }
    }

    /**
     * This function is used to do an HTTP request with the POST method and
     * returns the result as a String.
     *
     * @param url The url where to do the HTTP request
     * @param content The content of the HTTP request
     * @return The result of the HTTP request
     * @throws Exception
     */
    private static String post(URL url, String content) throws Exception {
        HttpsURLConnection connection = (HttpsURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("Content-Length", content.length() + "");
        connection.setRequestProperty("Ocp-Apim-Subscription-Key", SUBSCRIPTION_KEY);
        connection.setRequestProperty("X-ClientTraceId", java.util.UUID.randomUUID().toString());
        connection.setDoOutput(true);

        try (DataOutputStream wr = new DataOutputStream(connection.getOutputStream())) {
            byte[] encoded_content = content.getBytes("UTF-8");
            wr.write(encoded_content, 0, encoded_content.length);
            wr.flush();
        }

        StringBuilder response = new StringBuilder();
        try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"))) {
            String line;
            while ((line = in.readLine()) != null) {
                response.append(line);
            }
        }

        return response.toString();
    }

    /**
     * Sends a GET request to the Microsoft API in order to translate texts into
     * many differents languages.
     *
     * @param src The source language
     * @param dst The destination language
     * @param content The text to translate
     * @return The translation of the text
     * @throws Exception
     */
    public static String requestToTranslate(Language src, Language dst, String content) throws Exception {

        StringBuilder urlContent = new StringBuilder();
        urlContent.append(HOST2).append(URLEncoder.encode(content, "UTF-8"));
        urlContent.append("&from=").append(src.getValue()).append("&to=").append(dst.getValue());
        urlContent.append("&category=").append(getProjectId(src, dst));

        URL url = new URL(urlContent.toString());
        
        System.out.println("URL : " + url);

        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("GET");
        //connection.setRequestProperty("Content-Type", "application/json");
        //connection.setRequestProperty("Content-Length", content.length() + "");
        connection.setRequestProperty("Ocp-Apim-Subscription-Key", SUBSCRIPTION_KEY);
        //connection.setRequestProperty("X-ClientTraceId", java.util.UUID.randomUUID().toString());
        connection.setDoOutput(false);

        //DataOutputStream wr = new DataOutputStream(connection.getOutputStream());
        //byte[] encoded_content = content.getBytes("UTF-8");
        //wr.write(encoded_content, 0, encoded_content.length);
        //wr.flush();
        //wr.close();
        StringBuilder response = new StringBuilder();
        try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"))) {
            String line;
            while ((line = in.readLine()) != null) {
                response.append(line);
            }
        }

        String res = response.toString();
        return res.substring(res.indexOf(">")+1,res.length()-9);
    }

    /**
     * This is the general method used to do an HTTP request to the Microsoft
     * Translator API and returns the result as a nice looking JSON String.
     *
     * @param text The input text
     * @param modeEnum The function of the API that you want to use
     * @param params The params that uses the function
     * @return A JSON String that is the result of the HTTP request
     * @throws Exception
     */
    public static String request(String text, Mode modeEnum, String params) throws Exception {
        if (text == null) {
            text = "";
        }
        String mode = (modeEnum.getValue() == null) ? "" : modeEnum.getValue();
        if (params == null) {
            params = "";
        }

        URL url = new URL(HOST + "/" + mode + "?" + PATH + params);

        System.out.println(url.toString());

        List<RequestBody> objList = new ArrayList<>();
        objList.add(new RequestBody(text));
        String content = new Gson().toJson(objList);

        System.out.println(content);

        String result = post(url, content);

        return result;
    }

}
