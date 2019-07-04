module.exports = {
  testMatch: ['<rootDir>/__test__/**/*.test.js?(x)'],
  collectCoverage: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules']
}
