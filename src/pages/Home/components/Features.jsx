import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();
  
  const features = [
    'trustworthy',
    'scalable',
    'customizable',
    'sustainable',
    'secure',
    'adaptive'
  ];

  return (
    <div className="md:py-20 bg-[#171B1E]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 container mx-auto">
        {features.map((feature) => (
          <div key={feature} className="p-6 border-8 border-gradient">
            <h3 className="text-lg md:text-xl font-extrabold mb-2">
              {t(`features.${feature}.title`)}
            </h3>
            <p>{t(`features.${feature}.desc`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}