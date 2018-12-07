module.exports = {
  root: true,
  extends: ['eslint-config-airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },

  env: {
    node: true,
  },
  rules: {
    strict: 'error',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', 'jest/*.js', 'jest.config.js'] },
    ],
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js', 'test/**/*.js'],
      env: {
        jest: true,
      },
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
