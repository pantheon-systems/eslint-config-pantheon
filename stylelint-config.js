module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-a11y/recommended',
  ],
  ignoreFiles: ['public/zuora/styles.css'],
  rules: {
    'color-named': 'never',
    'color-no-hex': true,
    'declaration-no-important': true,
    'no-eol-whitespace': [true, { ignore: ['empty-lines'] }],
    'no-missing-end-of-source-newline': null,
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,2,0', // TODO: keep an eye on this rule to ensure it's not overly restricting
    'selector-max-universal': 2,
  },
};
