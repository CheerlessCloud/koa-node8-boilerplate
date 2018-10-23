module.exports = {
  root: true,
  extends: ['eslint-config-airbnb-base', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: true,
  },
  env: {
    node: true,
  },
  rules: {
    strict: 'error',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.test.js', '*.spec.js', 'test/**/*.js'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
        'eslint no-param-reassign': 'off',
      },
    },
  ],
};
