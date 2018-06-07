package com.sopra.proj.service;
/**
 * An enumeration of the function that are provided by the Microsoft Translator API
 * @author badurand
 * @since 1.0
 */
public enum Mode {
		LANGUAGES("languages"),
		DETECT("detect"),
		TRANSLATE("translate"),
		BREAKSENTENCE("breaksentence"),
		TRANSLITERATE("transliterate"),
		DICTIONARY_LOOKUP("dictionary/lookup"),
		DICTIONARY_EXAMPLES("dictionary/examples");
	 
		private final String value;
	 
		private Mode(String value) {
			this.value = value;
		}
	 
		public String getValue() {
			return this.value;
		}
	};