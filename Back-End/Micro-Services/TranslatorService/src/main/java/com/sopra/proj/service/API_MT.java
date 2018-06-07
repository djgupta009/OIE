package com.sopra.proj.service;
import java.net.ConnectException;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;

/**
 * The class that is used to call the internet functions and parse the JSON objects that 
 * are returned by these functions. 
 * @author badurand
 * @since 1.0 
 */
public class API_MT{

    //private static final String ERROR = "Error";
	
	
	/**
	 * This function is used to prettify a JSON String.
	 * @param json_text The text to prettify
	 * @return The text whose look has been improved
	 */
    public static String prettify(String json_text){
        JsonParser parser = new JsonParser();
        JsonElement json = parser.parse(json_text);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        return gson.toJson(json);
    }
    
    /**
	 * This method is used to do the detection of the language of a text
	 * @param text The text whose language has to be known
	 * @param dst The destination language
	 * @return The text that has been translated
	 */
	public static String translate(String text, Language dst) throws Exception {
        try{
        	
        	Language src = Language.getLanguage(detectLanguage(text));
        	
        	String result = RestAPICall.requestToTranslate(src,dst,text);
        	return result;
        	
        	/*
        	StringBuilder params = new StringBuilder();
        	params.append("&from=" + detected);
        	params.append("&to=" + dst.getValue());
        	
        	if(Language.getLanguage(detected) != null){
        		//params.append("&category=" + getProjectId(Language.getLanguage(detected), dst));
        	}
        	
            String response = RestAPICall.request(text, Mode.TRANSLATE, params.toString());
            JsonArray jobj = new Gson().fromJson(response, JsonArray.class);
        	String result = jobj.get(0).getAsJsonObject().get("translations").getAsJsonArray().get(0).getAsJsonObject().get("text").toString().replace("\"", "");
            return result;
            */
        }
        catch(ConnectException ex)
		{
			throw new ConnectException("ConnectionTimeout");
		}
        catch(Exception e){
            return e.toString();
        }
        
    }
	
	public static String dictionaryLookup(String text, Language src, Language dst){
        try{
        	String params = "&from=" + src.getValue() + "&to=" + dst.getValue();
            String response = RestAPICall.request(text, Mode.DICTIONARY_LOOKUP, params);
            //response = getObject(response, "text");
            //JsonArray jobj = new Gson().fromJson(response, JsonArray.class);
        	//String result = jobj.get(0).getAsJsonObject().get("translations").getAsJsonArray().get(1).getAsJsonObject().get("text").toString().replace("\"", "");
            return response;
        }
        catch(Exception e){
            return e.toString();
        }
    }
	
	public static String dictionaryExamples(String text, Language src, Language dst){
        try{
        	String params = "&from=" + src.getValue() + "&to=" + dst.getValue();
            String response = RestAPICall.request(text, Mode.DICTIONARY_EXAMPLES, params);
            //response = getObject(response, "text");
            //JsonArray jobj = new Gson().fromJson(response, JsonArray.class);
        	//String result = jobj.get(0).getAsJsonObject().get("translations").getAsJsonArray().get(1).getAsJsonObject().get("text").toString().replace("\"", "");
            return response;
        }
        catch(Exception e){
            return e.toString();
        }
    }
    
	/**
	 * This method is used to do the detection of the language of a text
	 * @param text The text whose language has to be known
	 * @return The name of the language that has been detected
	 */
	public static String detectLanguage(String text){
        try{
            String response = RestAPICall.request(text, Mode.DETECT, null);
            JsonArray jobj = new Gson().fromJson(response, JsonArray.class);
        	String result = jobj.get(0).getAsJsonObject().get("language").toString().replace("\"", "");
            return result;
        }
        catch(Exception e){
            return e.toString();
        }
    }
}