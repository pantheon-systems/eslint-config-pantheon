module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb-base'
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'no-underscore-dangle': ['error', { allow: ['__', '__typename'] }],
    'spaced-comment': [2, 'always', { exceptions: ['#'] }],
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
