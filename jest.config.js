/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: "./",
  "moduleNameMapper": {
    "^src/(.*)$": "<rootDir>/src/$1"
  }
};