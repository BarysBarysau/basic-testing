module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/06-mocking-node-api/?(*.)+(test).ts'], //Match  != regex!       //['**/?(*.)+(test).ts']
  moduleFileExtensions: ['ts', 'js', 'json'],
  moduleNameMapper: {
    '^axios$': require.resolve('axios'),
  },
  restoreMocks: true,
  resetMocks: true,
  moduleDirectories: ['node_modules', '<rootDir>/src/'],
  transform: {
    '^.+\\.ts?$': 'ts-jest', //one "\" is escaped when passing from string to regex! Equivalent: /^.+\.ts?$/.
  },
};
