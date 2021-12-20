module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
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
