import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-8 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <p className="font-bold">©DIGICETRA 2024</p>
          <a href="#" className="block mt-2">{t('footer.privacy')}</a>
        </div>

        <div>
          <p className="font-bold">{t('footer.sayHello')}</p>
          <a href="mailto:hello@Digicetra.com" className="block mt-2">hello@Digicetra.com</a>
        </div>

        <div>
          <p className="font-bold">{t('footer.socialMedia')}</p>
          <a href="#" className="block mt-2">{t('footer.socialLinks')}</a>
        </div>

        <div className="flex justify-start items-center">
          <img src="logodgc.png" className="h-[60%]" alt="Digicetra Logo" />
        </div>
      </div>

      <div className="container mx-auto text-xs text-gray-500 mt-6">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
}