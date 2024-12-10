import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    region: '',
    company: '',
    phoneNumber: '',
    email: '',
    request: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.sheetmonkey.io/form/koF7NpGDsxWrW6ExL3KPB3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({
          fullName: '',
          region: '',
          company: '',
          phoneNumber: '',
          email: '',
          request: '',
        });
      } else {
        console.error('Error submitting the form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold">
            {t('contact.form.fullName')}
          </label>
          <input
            type="text"
            id="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('contact.form.fullNamePlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-semibold">
            {t('contact.form.region')}
          </label>
          <select
            id="region"
            required
            value={formData.region}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              {t('contact.form.regionPlaceholder')}
            </option>
            {['northAmerica', 'europe', 'asia', 'southAmerica', 'australia', 'africa'].map((region) => (
              <option key={region} value={region}>
                {t(`contact.form.regions.${region}`)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold">
            {t('contact.form.company')}
          </label>
          <input
            type="text"
            id="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('contact.form.companyPlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-semibold">
            {t('contact.form.phoneNumber')}
          </label>
          <input
            type="tel"
            id="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('contact.form.phoneNumberPlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={t('contact.form.emailPlaceholder')}
          />
        </div>

        <div>
          <label htmlFor="request" className="block text-sm font-semibold">
            {t('contact.form.request')}
          </label>
          <textarea
            id="request"
            value={formData.request}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
            placeholder={t('contact.form.requestPlaceholder')}
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t('contact.form.submit')}
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white text-black rounded-lg p-8 max-w-xs text-center space-y-4">
            <h2 className="text-xl font-bold">{t('contact.modal.title')}</h2>
            <p>{t('contact.modal.message')}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {t('contact.modal.close')}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
