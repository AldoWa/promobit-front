export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest" 
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  testPathIgnorePatterns: ["/src/utils/"],
  moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/__mocks__/fileMock.js',
      "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
}