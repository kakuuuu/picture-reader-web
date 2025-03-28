import React from 'react';

const Navigation: React.FC<{
  t: any;
  i18n: any;
  router: any;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (id: string) => void;
  changeLanguage: (lng: string) => void;
}> = ({
  t,
  i18n,
  router,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  changeLanguage,
}) => {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  if (i18n.language === 'en') {
                    changeLanguage('zh-CN');
                  } else {
                    changeLanguage('en');
                  }
                }}
                className="text-gray-700 hover:text-indigo-600"
              >
                {i18n?.language === 'en' ? '中文' : 'English'}
              </button>
              <img
                src={`${router.basePath}/assets/images/logo.svg `}
                alt="Picture Reader Logo"
                className="h-12"
              />
              <div className="ml-10 hidden space-x-8 md:flex">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                  }}
                >
                  {t('navigation.features')}
                </a>
                <a
                  href="#demo"
                  className="text-gray-700 hover:text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('demo');
                  }}
                >
                  {t('navigation.demo')}
                </a>
                <a
                  href="#support"
                  className="text-gray-700 hover:text-indigo-600"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('support');
                  }}
                >
                  {t('navigation.support')}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://chromewebstore.google.com/detail/picture-reader/beljcmkgfgeegijofiokcoalfbappfen"
                target="_blank"
                rel="noreferrer"
              >
                <button className="!rounded-button cursor-pointer whitespace-nowrap bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700">
                  {t('buttons.add_browser')}
                </button>
              </a>
              <button
                className="ml-4 cursor-pointer text-gray-600 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-white shadow-lg md:hidden">
          <div className="space-y-2 px-4 py-2">
            <a
              href="#features"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
                setIsMenuOpen(false);
              }}
            >
              {t('navigation.features')}
            </a>
            <a
              href="#demo"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('demo');
                setIsMenuOpen(false);
              }}
            >
              {t('navigation.demo')}
            </a>
            <a
              href="#support"
              className="block py-2 text-gray-700"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('support');
                setIsMenuOpen(false);
              }}
            >
              {t('navigation.support')}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
