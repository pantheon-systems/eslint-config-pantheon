module.exports = {
  env: {
    node: true,
  },
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
  },
};
