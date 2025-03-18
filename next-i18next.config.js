const path = require('path');

const localePath = path.resolve('./public/locales');

module.exports = {
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath,
  // localeStructure: '/',
  ns: ['common'],
};
