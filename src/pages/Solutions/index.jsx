import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';
import SolutionsNav from './components/SolutionsNav';
import SolutionCard from './components/SolutionCard';

export default function Solutions() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('sportsbook');

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="bg-black h-[40vh] uppercase p-8 md:p-16 text-white">
        <div className="container mx-auto flex flex-col items-start justify-center h-full text-left">
          <p className="text-4xl mt-10 font-bold uppercase text-[#fff]">
            {t('solutionsPage.mainTitle')}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white text-black py-16 px-4 md:px-10">
        <div className="container mx-auto">
          <SolutionsNav activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Sportsbook Card */}
          {activeTab === 'sportsbook' && (
            <SolutionCard
              type="sportsbook"
              isActive={true}
            />
          )}

          {/* White Label Card */}
          {activeTab === 'whitelabel' && (
            <SolutionCard
              type="whiteLabel"
              isActive={true}
            />
          )}

          {/* Turnkey Card */}
          {activeTab === 'turnkey' && (
            <SolutionCard
              type="turnKey"
              isActive={true}
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
