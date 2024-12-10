import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Fecha o dropdown ao selecionar um idioma
  };

  const getLanguageLabel = () => {
    const currentLanguage = i18n.language;
    switch (currentLanguage) {
      case 'en':
        return 'English';
      case 'es':
        return 'Español';
      case 'pt':
        return 'Português';
      case 'ch':
        return '中文';
      case 'ar':
        return 'العربية';
      default:
        return 'Language'; // Fallback
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img src="logodgc.png" alt="Logo" className="h-12" />
          </Link>

          {/* Links de navegação */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="nav-link">{t('nav.home')}</Link>
              <Link to="/about" className="nav-link">{t('nav.about')}</Link>
              <Link to="/solutions" className="nav-link">{t('nav.solutions')}</Link>
              <Link to="/contact" className="nav-link">{t('nav.contact')}</Link>
            </div>
          </div>

          {/* Dropdown de idioma */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-5 py-2 bg-gray-800 text-gray-200 text-sm font-medium rounded-full shadow-lg hover:bg-gray-700 hover:text-white transition-colors duration-200 focus:ring-2 focus:ring-green-400 flex items-center space-x-2"
            >
              <span>{getLanguageLabel()}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-gray-200 rounded-lg shadow-lg border border-gray-700">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white rounded-t-lg"
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage('es')}
                  className="block w-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                >
                  Español
                </button>
                <button
                  onClick={() => changeLanguage('pt')}
                  className="block w-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                >
                  Português
                </button>
                <button
                  onClick={() => changeLanguage('ch')}
                  className="block w-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white"
                >
                  中文
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className="block w-full px-4 py-2 text-sm hover:bg-gray-700 hover:text-white rounded-b-lg"
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
