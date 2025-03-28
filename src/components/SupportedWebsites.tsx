import React from 'react';

const SupportedWebsites: React.FC<{ t: any }> = ({ t }) => {
  return (
    <div id="support" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {t('supported_websites.title')}
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            {
              name: 'Unsplash',
              domain: 'unsplash.com',
            },
            {
              name: 'Pexels',
              domain: 'pexels.com',
            },
            {
              name: 'PIXIV',
              domain: 'pixiv.net',
            },
            {
              name: 'Youtube',
              domain: 'youtube.com',
            },
            {
              name: 'Reddit',
              domain: 'reddit.com',
            },
            {
              name: 'Behance',
              domain: 'behance.com',
            },
            {
              name: 'DeviantArt',
              domain: 'deviantart.com',
            },
            {
              name: 'Artstation',
              domain: 'artstation.com',
            },
            {
              name: 'Pinterest',
              domain: 'pinterest.com',
            },
          ].map((site, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow"
            >
              <div>
                <a
                  href={`https://${site.domain}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={`https://logo.clearbit.com/${site.domain}`}
                    alt={site.name}
                    className="mx-auto mb-4 size-16"
                  />
                  <div className="font-medium text-gray-900">{site.name}</div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportedWebsites;
