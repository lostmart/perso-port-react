import { useLanguage } from "../contexts/LanguageContext"
import { useState, useEffect } from "react"

/**
 * Custom hook for translations
 * Loads the appropriate translation file based on current language
 * @returns {object} Object containing translation function and current language
 */
export const useTranslation = () => {
	const { currentLanguage } = useLanguage()
	const [translations, setTranslations] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// Dynamically import the translation file for the current language
		const loadTranslations = async () => {
			setIsLoading(true)
			try {
				// Use Vite's glob import for better handling
				let translationModule

				if (currentLanguage === "en") {
					translationModule = await import("../translations/en.json")
				} else if (currentLanguage === "fr") {
					translationModule = await import("../translations/fr.json")
				} else if (currentLanguage === "es") {
					translationModule = await import("../translations/es.json")
				}

				setTranslations(translationModule.default || translationModule)
				setIsLoading(false)
			} catch (error) {
				console.error(
					`Failed to load translations for language: ${currentLanguage}`,
					error,
				)
				// Fallback to empty object if translation file doesn't exist
				setTranslations({})
				setIsLoading(false)
			}
		}

		loadTranslations()
	}, [currentLanguage])

	/**
	 * Get translation by key with support for nested keys
	 * @param {string} key - Translation key (supports dot notation: "nav.home")
	 * @param {object} params - Optional parameters for dynamic translations
	 * @returns {string} Translated text or the key itself if not found
	 */
	const t = (key, params = {}) => {
		if (isLoading) {
			return key // Return key while loading to avoid flashing
		}

		// Support nested keys with dot notation (e.g., "nav.home")
		const keys = key.split(".")
		let value = translations

		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k]
			} else {
				// Return the key itself if translation not found (helpful for debugging)
				console.warn(
					`Translation missing for key: "${key}" in language: ${currentLanguage}`,
				)
				return key
			}
		}

		// Handle dynamic parameters in translations
		// Example: t('welcome', { name: 'Martin' }) with translation "Welcome, {name}!"
		if (typeof value === "string" && Object.keys(params).length > 0) {
			return value.replace(/\{(\w+)\}/g, (match, param) => {
				return params[param] !== undefined ? params[param] : match
			})
		}

		return value
	}

	return {
		t,
		currentLanguage,
		isLoading,
	}
}

export default useTranslation
