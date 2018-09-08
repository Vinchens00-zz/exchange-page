module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(svg)$': '<rootDir>/src/__mocks__/svgMock.js'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.test.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}'
  ],
  setupFiles: ['<rootDir>/setupTests.js'],
  testURL: 'http://localhost:3000/',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,mjs}',
    '!src/**/__tests__/*.{js,jsx,mjs}'
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 55,
      lines: 67,
      statements: 65
    }
  },

  moduleFileExtensions: ['js'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|less|styl)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|styl)$': '<rootDir>/src/__mocks__/fileMock.js',
    '^icons(.*)$': '<rootDir>/public/assets/svg$1',
    '^elements(.*)$': '<rootDir>/src/elements$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^ducks(.*)$': '<rootDir>/src/ducks$1',
    '^api(.*)$': '<rootDir>/src/api$1',
    '^src(.*)$': '<rootDir>/src$1'
  }
};
