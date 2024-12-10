import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-cover bg-center h-[60vh]" style={{ backgroundImage: "url('abstract-green-background.png')" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#171B1E]"></div>
      <div className="relative flex flex-col items-start justify-center h-full text-left text-[#fff] ml-5 md:ml-32">
        <h1 className="md:text-6xl text-3xl font-bold">{t('hero.dynamic')}</h1>
        <h2 className="md:text-6xl text-3xl font-bold pt-3">{t('hero.igaming')}</h2>
      </div>
    </div>
  );
}