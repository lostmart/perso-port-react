import { createContext, useState, useEffect, useContext } from "react"

// Create the context
const LanguageContext = createContext()

// Supported languages
const SUPPORTED_LANGUAGES = ["en", "fr", "es"]
const DEFAULT_LANGUAGE = "en"
const STORAGE_KEY = "preferredLanguage"

/**
 * Detects browser language and returns a supported language code
 * @returns {string} Language code ('en', 'fr', or 'es')
 */
const detectBrowserLanguage = () => {
	// Get browser language (e.g., "en-US", "fr-FR", "es-MX")
	const browserLang = navigator.language || navigator.userLanguage

	// Extract just the language code (first 2 characters)
	const langCode = browserLang.substring(0, 2).toLowerCase()

	// Return the language code if supported, otherwise default
	return SUPPORTED_LANGUAGES.includes(langCode) ? langCode : DEFAULT_LANGUAGE
}

/**
 * Gets initial language from localStorage or browser detection
 * @returns {string} Language code
 */
const getInitialLanguage = () => {
	// Priority 1: Check localStorage for user's previous choice
	const storedLang = localStorage.getItem(STORAGE_KEY)
	if (storedLang && SUPPORTED_LANGUAGES.includes(storedLang)) {
		return storedLang
	}

	// Priority 2: Detect from browser
	return detectBrowserLanguage()
}

/**
 * Language Provider Component
 * Wraps your app and provides language context to all children
 */
export const LanguageProvider = ({ children }) => {
	const [currentLanguage, setCurrentLanguage] = useState(getInitialLanguage)

	/**
	 * Changes the current language and persists to localStorage
	 * @param {string} newLang - Language code ('en', 'fr', or 'es')
	 */
	const changeLanguage = (newLang) => {
		if (SUPPORTED_LANGUAGES.includes(newLang)) {
			setCurrentLanguage(newLang)
			localStorage.setItem(STORAGE_KEY, newLang)
		} else {
			console.warn(
				`Language "${newLang}" is not supported. Supported languages: ${SUPPORTED_LANGUAGES.join(", ")}`,
			)
		}
	}

	// Optional: You can add an effect to handle language changes
	useEffect(() => {
		// You could add logic here for when language changes
		// For example, updating document lang attribute
		document.documentElement.lang = currentLanguage
	}, [currentLanguage])

	const value = {
		currentLanguage,
		changeLanguage,
		supportedLanguages: SUPPORTED_LANGUAGES,
	}

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}

/**
 * Custom hook to use language context
 * Throws error if used outside LanguageProvider
 */
export const useLanguage = () => {
	const context = useContext(LanguageContext)

	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}

	return context
}

export default LanguageContext
