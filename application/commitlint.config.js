/** @type {{rules: import('@commitlint/types').RulesConfig}} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // https://commitlint.js.org/reference/rules
  rules: {
    'scope-empty': [2, 'never'],
  },
};