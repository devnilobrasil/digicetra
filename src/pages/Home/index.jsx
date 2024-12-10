import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{ backgroundImage: "url('bg-hero.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#171B1E]"></div>
        <div className="relative flex flex-col items-start justify-center h-full text-left text-[#fff] ml-5 md:ml-32">
          <h1 className="md:text-6xl text-3xl font-bold">{t('hero.dynamic')}</h1>
          <h2 className="md:text-6xl text-3xl font-bold pt-3">{t('hero.igaming')}</h2>
        </div>
      </div>

      {/* Features Section */}
      <div className="md:py-20 bg-[#171B1E]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 container mx-auto">
          {['trustworthy', 'scalable', 'customizable', 'sustainable', 'secure', 'adaptive'].map((feature) => (
            <div key={feature} className="p-6 border-8 border-gradient">
              <h3 className="text-lg md:text-xl font-extrabold mb-2">{t(`features.${feature}.title`)}</h3>
              <p>{t(`features.${feature}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>

    
       {/* Solutions Section */}
    
       <div
      className="h-auto flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('bgbg.png')" }}
    >
      <div className="h-96 flex items-center justify-center mx-12">
        <h1 className="md:text-6xl text-3xl uppercase font-medium text-center text-white">
          {t('solutions.mainTitle')}
        </h1>
      </div>
      <div className="py-12 w-full">
        <div className="container mx-auto">
          <h2 className="text-white text-3xl font-bold text-left mb-8 ml-5">
            {t('solutions.subtitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sportsbook Card */}
            <div className="bg-[#292929] text-white rounded-xl p-6 shadow-lg m-5">
              <h3 className="text-xl font-bold mb-4">{t('solutions.sportsbook.title')}</h3>
              <p className="mb-4">{t('solutions.sportsbook.desc')}</p>
              <p className="font-light mb-4">{t('solutions.sportsbook.time')}</p>
              <Link
                to="/solutions"
                className="bg-white text-black font-semibold px-4 py-2 rounded-full"
              >
                {t('solutions.learnMore')}
              </Link>
              <p className="text-xs mt-4 text-[#949391]">{t('solutions.disclaimer')}</p>
            </div>

            {/* White Label Card */}
            <div className="bg-[#292929] text-white rounded-xl p-6 shadow-lg m-5">
              <h3 className="text-xl font-bold mb-4">{t('solutions.whiteLabel.title')}</h3>
              <p className="mb-4">{t('solutions.whiteLabel.desc')}</p>
              <p className="font-light mb-4">{t('solutions.whiteLabel.time')}</p>
              <Link
                to="/solutions"
                className="bg-white text-black font-semibold px-4 py-2 rounded-full"
              >
                {t('solutions.learnMore')}
              </Link>
              <p className="text-xs mt-4 text-[#949391]">{t('solutions.disclaimer')}</p>
            </div>

            {/* Turnkey Card */}
            <div className="bg-[#292929] text-white rounded-xl p-6 shadow-lg m-5">
              <h3 className="text-xl font-bold mb-4">{t('solutions.turnkey.title')}</h3>
              <p className="mb-4">{t('solutions.turnkey.desc')}</p>
              <p className="font-light mb-4">{t('solutions.turnkey.time')}</p>
              <Link
                to="/solutions"
                className="bg-white text-black font-semibold px-4 py-2 rounded-full"
              >
                {t('solutions.learnMore')}
              </Link>
              <p className="text-xs mt-4 text-[#949391]">{t('solutions.disclaimer')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


      {/* Technology Section */}
      <div className="bg-black h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
      <h1 className="text-white text-5xl font-bold">
        <span>{t('tech.title1')}</span>
        <br />
        <span>{t('tech.title2')}</span>
      </h1>
      <p className="text-white text-lg">{t('tech.subtitle')}</p>
      <Link
        to="/contact"
        className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300"
      >
        {t('tech.contactButton')}
      </Link>
    </div>
      {/* Platform Section */}
      <div className="py-14 bg-[#171b1e]">
  <div className="container mx-auto px-4">
    {/* Título */}
    <h2 className="text-3xl font-bold text-white mb-6">{t('platform.title')}</h2>
    <p className="text-white text-lg mb-8">{t('platform.desc1')}</p>
    <p className="text-white text-lg mb-8">{t('platform.desc2')}</p>

    {/* Grid de Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="sportsbook 1.png" className="h-16" alt={t('platform.cards.sportsbook.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.sportsbook.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.sportsbook.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="casino.png" className="h-16" alt={t('platform.cards.casino.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.casino.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.casino.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="bonus (1) 1.png" className="h-16" alt={t('platform.cards.bonusEngine.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.bonusEngine.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.bonusEngine.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="payment 1.png" className="h-16" alt={t('platform.cards.paymentSystem.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.paymentSystem.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.paymentSystem.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>

      {/* Card 5 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="risk.png" className="w-16" alt={t('platform.cards.riskManagement.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.riskManagement.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.riskManagement.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>

      {/* Card 6 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="busines.png" className="h-16" alt={t('platform.cards.analytics.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.analytics.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.analytics.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>

      {/* Card 7 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="retail 1.png" className="h-16" alt={t('platform.cards.retail.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.retail.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.retail.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>

      {/* Card 8 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="CRM_ 1.png" className="h-16" alt={t('platform.cards.crm.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.crm.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.crm.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>

      {/* Card 9 */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-10">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 mr-3">
            <img src="cmss.png" className="h-16" alt={t('platform.cards.cms.title')} />
          </div>
          <h3 className="text-xl font-semibold">{t('platform.cards.cms.title')}</h3>
        </div>
        <p className="text-gray-700 mb-4">{t('platform.cards.cms.desc')}</p>
        <a href="#" className="text-blue-600 font-semibold hover:underline">{t('platform.learnMore')}</a>
      </div>
    </div>
  </div>
</div>


      {/* Business Ambitions Section */}
      <div className="bg-black h-96 flex items-center justify-center">
        <h1 className="md:text-6xl text-3xl font-medium text-center text-white">
          <span>{t('business.text1')}</span>
          <span className="text-transparent bg-clip-text bg-custom-gradient font-bold">{t('business.highlight')}</span>
          <span>{t('business.text2')}</span>
        </h1>
      </div>

      {/* Talk Section */}
      <div
      className="relative bg-cover bg-center h-[60vh]"
      style={{
        backgroundImage:
          "url('https://res2.weblium.site/res/660bbfdd8be79a000f6a5bc3/662608c5a7af09000fa9d050_optimized_1920')",
      }}
    >
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white ml-5 md:ml-14">
        <h1 className="text-4xl md:text-7xl font-bold w-10/12 md:w-full">{t('talk.title')}</h1>
        <Link
          to="/contact"
          className="mt-6 text-2xl bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-blue-400 transition duration-300"
        >
          {t('talk.button')}
        </Link>
      </div>
    </div>

      <Footer />
    </div>
  );
}
