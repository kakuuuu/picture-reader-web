import React from 'react';

const FeaturesSection: React.FC<{ t: any }> = ({ t }) => {
  return (
    <div id="features" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t('features.description')}
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: t('features.items.0.title'),
              description: t('features.items.0.description'),
              icon: 'fa-images',
            },
            {
              title: t('features.items.1.title'),
              description: t('features.items.1.description'),
              icon: 'fa-crop',
            },
            {
              title: t('features.items.2.title'),
              description: t('features.items.2.description'),
              icon: 'fa-play-circle',
            },
            {
              title: t('features.items.3.title'),
              description: t('features.items.3.description'),
              icon: 'fa-filter',
            },
            {
              title: t('features.items.4.title'),
              description: t('features.items.4.description'),
              icon: 'fa-download',
            },
            {
              title: t('features.items.5.title'),
              description: t('features.items.5.description'),
              icon: 'fa-sync',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-4 text-3xl text-indigo-600">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
