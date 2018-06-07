package com.sopra.proj.service;
/**
 * An enumeration of the languages that are available with the Microsoft Translator API
 * @author badurand
 * @since 1.0
 */
public enum Language {
		ENGLISH("en"),
		FRENCH("fr"),
		SPANISH("es");
	 
		private final String value;
	 
		private Language(String value) {
			this.value = value;
		}
	 
		public String getValue() {
			return this.value;
		}
		
		public static Language getLanguage(String value) {
			Language[] lg = Language.values();
			for(int i=0; i< lg.length; i++){
				if(lg[i].getValue().equals(value)){
					return lg[i];
				}
			}
			return null;
		}
		
};