import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer';
import ContactForm from './components/ContactForm';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-black h-[40vh] uppercase p-8 md:p-16 text-white">
        <div className="container mx-auto flex flex-col items-start justify-center h-full text-left">
          <p className="text-4xl mt-10 font-bold uppercase text-[#fff]">
            {t('contact.title')}
          </p>
        </div>
      </div>

      <div className="p-10 bg-custom-gradient">
        <div className="bg-[#24313d] text-white rounded-3xl p-8 max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}