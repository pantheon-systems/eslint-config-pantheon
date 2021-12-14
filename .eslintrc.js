module.exports = {
  extends: [
    './configurations/node',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'danger.config.js',
        ],
      },
    ],
  },
};
