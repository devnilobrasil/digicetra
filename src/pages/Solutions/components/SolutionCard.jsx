import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function SolutionCard({ type, isActive }) {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  // Defina os caminhos das imagens com base no tipo
  const imageSources = {
    sportsbook: 'sportsbook.png',
    whiteLabel: 'white-label.png',
    turnKey: 'turnkey.png',
  };

  return (
    <div
      className={`card bg-[#80ba50] text-white rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center ${
        !isActive && 'hidden'
      }`}
    >
      {/* Texto e detalhes */}
      <div className="space-y-4 md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold">{t(`solutionsPage.cards.${type}.title`)}</h2>
        <hr className="border-white w-12" />
        <p className="text-sm md:text-base">{t(`solutionsPage.cards.${type}.description`)}</p>
        <p className="font-semibold text-sm md:text-base">
          <span>{t('solutionsPage.timeToMarket')}</span>{' '}
          <span>{t(`solutionsPage.cards.${type}.time`)}</span>
        </p>

        {/* Detalhes adicionais */}
        {showDetails && (
          <div className="space-y-2">
            <p className="text-sm md:text-base font-semibold">{t('solutionsPage.includes')}</p>
            <ul className="space-y-2 mt-2 ml-4 list-disc list-inside text-sm md:text-base">
              <li>{t(`solutionsPage.cards.${type}.features.firstFeature`)}</li>
              <li>{t(`solutionsPage.cards.${type}.features.secondFeature`)}</li>
              <li>{t(`solutionsPage.cards.${type}.features.thirdFeature`)}</li>
              <li>{t(`solutionsPage.cards.${type}.features.fourthFeature`)}</li>
            </ul>
          </div>
        )}

        {/* Botão de alternância */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-white text-xs md:text-sm cursor-pointer underline"
        >
          {showDetails
            ? t('solutionsPage.hideDetails')
            : t(`solutionsPage.cards.${type}.learnMore`)}
        </button>
      </div>

      {/* Imagem */}
      <div className="w-full md:w-1/3 flex-shrink-0 mt-4 md:mt-0">
        <img
          src={imageSources[type]} // Define a imagem com base no tipo
          alt={t(`solutionsPage.cards.${type}.title`)}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

SolutionCard.propTypes = {
  type: PropTypes.oneOf(['sportsbook', 'whiteLabel', 'turnKey']).isRequired,
  isActive: PropTypes.bool.isRequired,
};
