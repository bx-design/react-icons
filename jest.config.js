module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.spec.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
}
