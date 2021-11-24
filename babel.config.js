module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env', '@babel/preset-react'];
  const plugins = [
    [
      'module-resolver',
      {
        root: './src',
      },
    ],
    [
      'i18next-extract',
      {
        defaultNS: 'common',
        discardOldKeys: true,
        outputPath: 'public/locales/{{locale}}/{{ns}}.json',
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
