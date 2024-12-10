import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-black h-[70vh] uppercase p-8 md:p-16">
        <div className="container mx-auto flex flex-col items-start justify-center h-full text-left">
          <p className="text-4xl font-bold uppercase text-[#fff] mb-10">{t('about.title')}</p>
          <div className="flex items-start">
            <div>
              <h2 className="md:text-5xl text-2xl font-bold">
                <span className="text-white shadow-lg">{t('about.subtitle1')}</span>
              </h2>
              <h2 className="md:text-5xl text-2xl font-bold">{t('about.subtitle2')}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-custom-gradient p-8 md:p-16">
        <div className="container mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <p key={i} className="mb-6">{t(`about.paragraph${i}`)}</p>
          ))}

          <div className="flex items-center space-x-4 mt-8">
            <span className="font-bold">{t('about.followUs')}</span>
            <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-linkedin fa-lg"></i></a>
            <a href="#" className="text-white hover:text-blue-500"><i className="fab fa-instagram fa-lg"></i></a>
          </div>
        </div>
      </div>

      {/* Connections Section */}
      <div className="bg-custom-gradient p-8 md:p-16 border-t-2">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">{t('connections.title')}</h2>
          <ul className="space-y-4 text-lg">
            {[1, 2, 3].map((item) => (
              <li key={item} className="flex items-start">
                <span className="text-white text-xl mr-3">•</span>
                <div className="flex flex-col">
                  <p>{t(`connections.item${item}.title`)}</p>
                  <p>{t(`connections.item${item}.description`)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-black py-16 px-10">
        <div className="container mx-auto space-y-12 md:px-0">
          {['mission', 'vision'].map((section) => (
            <div key={section} className="space-y-2">
              <p className="text-sm uppercase">{t(`${section}.title`)}</p>
              <div className="w-12 border-t border-white mb-2"></div>
              <h2 className="text-2xl md:text-3xl font-light">
                <span className="text-blue-500 font-semibold">{t(`${section}.highlight`)}</span>
                <span>{t(`${section}.text`)}</span>
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-black p-8 md:p-16">
        <div className="container mx-auto">
          <p className="text-sm uppercase">{t('values.title')}</p>
          <div className="w-12 border-t border-white mt-2 mb-5"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['connect', 'evolve', 'deliver'].map((value) => (
              <div key={value} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{t(`values.${value}.title`)}</h3>
                <p>{t(`values.${value}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div
      className="relative bg-cover bg-center h-[60vh]"
      style={{ backgroundImage: "url('banner_image.png')" }}
    >
      <div className="uppercase relative z-10 flex flex-col items-start justify-center h-full text-left text-white ml-5 md:ml-12">
        <h1 className="text-4xl md:text-7xl font-bold w-10/12 md:w-full">{t('banner.title')}</h1>
        <Link
          to="/contact"
          className="mt-6 text-2xl bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-blue-400 transition duration-300"
        >
          {t('banner.contact')}
        </Link>
      </div>
    </div>
      <Footer />
    </div>
  );
}
