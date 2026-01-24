import { useLanguage } from "../contexts/LanguageContext"
import "./LanguageSwitcher.scss"

/**
 * Language Switcher Component
 * Displays buttons/links to switch between available languages
 */
const LanguageSwitcher = ({ variant = "default" }) => {
	const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage()

	const languageNames = {
		en: "English",
		fr: "Français",
		es: "Español",
	}

	const languageFlags = {
		en: "🇬🇧",
		fr: "🇫🇷",
		es: "🇪🇸",
	}

	const handleLanguageChange = (lang) => {
		changeLanguage(lang)
	}

	// Different variants for different placements
	if (variant === "compact") {
		// Compact version with just language codes
		return (
			<div className="language-switcher language-switcher--compact">
				{supportedLanguages.map((lang) => (
					<button
						key={lang}
						onClick={() => handleLanguageChange(lang)}
						className={`language-btn ${currentLanguage === lang ? "active" : ""}`}
						aria-label={`Switch to ${languageNames[lang]}`}
					>
						{lang.toUpperCase()}
					</button>
				))}
			</div>
		)
	}

	if (variant === "flags") {
		// Version with flag emojis
		return (
			<div className="language-switcher language-switcher--flags">
				{supportedLanguages.map((lang) => (
					<button
						key={lang}
						onClick={() => handleLanguageChange(lang)}
						className={`language-btn ${currentLanguage === lang ? "active" : ""}`}
						aria-label={`Switch to ${languageNames[lang]}`}
						title={languageNames[lang]}
					>
						<span className="flag">{languageFlags[lang]}</span>
					</button>
				))}
			</div>
		)
	}

	// Default version with full names
	return (
		<div className="language-switcher language-switcher--default">
			{supportedLanguages.map((lang) => (
				<button
					key={lang}
					onClick={() => handleLanguageChange(lang)}
					className={`language-btn ${currentLanguage === lang ? "active" : ""}`}
					aria-label={`Switch to ${languageNames[lang]}`}
				>
					<span className="flag">{languageFlags[lang]}</span>
					<span className="name">{languageNames[lang]}</span>
				</button>
			))}
		</div>
	)
}

export default LanguageSwitcher
