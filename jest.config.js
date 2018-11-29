module.exports = {
	moduleFileExtensions: ['js', 'json'],
	rootDir: '.',
	testRegex: '.(test|spec).js$',
	transform: {
		'^.+\\.js?$': 'babel-jest',
	},
	coverageDirectory: './coverage',
	testEnvironment: './jest/IntegrationEnvironment.js',
	notifyMode: 'change',
	coveragePathIgnorePatterns: ['src/index.js'],
};
