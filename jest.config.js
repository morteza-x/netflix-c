const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/**
 * @type {import(`jest`).Config}
 */
const config = {
  // add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: `jest-environment-jsdom`,
  preset: "ts-jest",
};

module.exports = createJestConfig(config);
