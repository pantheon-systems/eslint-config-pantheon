module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/preset-env'];
  const plugins = [
    [
      'module-resolver',
      {
        root: './src',
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
