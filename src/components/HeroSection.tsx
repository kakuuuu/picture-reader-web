import React from 'react';

const HeroSection: React.FC<{ t: any; router: any }> = ({ t, router }) => {
  return (
    <div className="relative min-h-[800px] bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      <div className="absolute inset-0">
        <img
          src={`${router.basePath}/assets/images/home-bg.jpg`}
          alt="Background Pattern"
          className="size-full object-cover opacity-50"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 lg:text-6xl">
                <span className="block">{t('title')}</span>
              </h1>
              <p>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent">
                  {t('subtitle')}
                </span>
              </p>
              <p className="max-w-2xl text-xl text-gray-600">
                {t('description')}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://chromewebstore.google.com/detail/picture-reader/beljcmkgfgeegijofiokcoalfbappfen"
                target="_blank"
                rel="noreferrer"
              >
                <button className="!rounded-button flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-indigo-800 hover:shadow-xl">
                  <i className="fab fa-chrome mr-2"></i>
                  {t('buttons.add_chrome')}
                </button>
              </a>
              <a
                href="https://microsoftedge.microsoft.com/addons/detail/picture-reader/ejbbhhcdffiocibipjepabjbpejplooh"
                target="_blank"
                rel="noreferrer"
              >
                <button className="!rounded-button flex items-center justify-center whitespace-nowrap border-2 border-indigo-100 bg-white px-8 py-4 text-lg font-medium text-indigo-700 shadow-lg transition-all duration-300 hover:bg-indigo-50 hover:shadow-xl">
                  <i className="fab fa-edge mr-2"></i>
                  {t('buttons.add_edge')}
                </button>
              </a>
              <a
                href="https://addons.mozilla.org/firefox/addon/picture-reader/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="!rounded-button flex items-center justify-center whitespace-nowrap border-2 border-indigo-100 bg-white px-8 py-4 text-lg font-medium text-indigo-700 shadow-lg transition-all duration-300 hover:bg-indigo-50 hover:shadow-xl">
                  <i className="fab fa-edge mr-2"></i>
                  {t('buttons.add_firefox')}
                </button>
              </a>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <div className="flex items-center">
                <i className="fas fa-star mr-2 text-yellow-400"></i>
                <span className="text-gray-600">4.9/5 Rating</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute  -inset-4 rounded bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 blur-xl"></div>
            <img
              src={`${router.basePath}/assets/images/home-expample.png`}
              alt="Picture Reader Interface"
              className="relative w-full rounded  shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
