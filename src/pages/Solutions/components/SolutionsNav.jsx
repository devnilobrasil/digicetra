import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export default function SolutionsNav({ activeTab, onTabChange }) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row justify-around border-b border-gray-200 mb-8 text-center md:text-left">
      {/* Sportsbook Tab */}
      <button
        onClick={() => onTabChange('sportsbook')}
        className={`menu-button text-lg font-semibold pb-2 ${
          activeTab === 'sportsbook'
            ? 'text-black border-b-2 border-[#2662c3]'
            : 'text-gray-500 hover:text-black'
        }`}
      >
        {t('solutionsPage.menu.sportsbook')}
      </button>

      {/* White Label Tab */}
      <button
        onClick={() => onTabChange('whitelabel')}
        className={`menu-button text-lg font-semibold pb-2 ${
          activeTab === 'whitelabel'
            ? 'text-black border-b-2 border-[#2662c3]'
            : 'text-gray-500 hover:text-black'
        }`}
      >
        {t('solutionsPage.menu.whiteLabel')}
      </button>

      {/* Turnkey Tab */}
      <button
        onClick={() => onTabChange('turnkey')}
        className={`menu-button text-lg font-semibold pb-2 ${
          activeTab === 'turnkey'
            ? 'text-black border-b-2 border-[#2662c3]'
            : 'text-gray-500 hover:text-black'
        }`}
      >
        {t('solutionsPage.menu.turnKey')}
      </button>
    </div>
  );
}

SolutionsNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};
