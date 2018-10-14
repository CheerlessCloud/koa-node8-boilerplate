module.exports = {
  moduleFileExtensions: ['js', 'json'],
  rootDir: 'src',
  testRegex: '.spec.js$',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  notifyMode: 'change',
  coveragePathIgnorePatterns: ['src/http-server.js'],
};
