module.exports = {
    setupFilesAfterEnv: [
        '<rootDir>/build/jest/setup.js',
        '<rootDir>/build/jest/setup-test.ts'
    ],
    setupFiles: ['jest-canvas-mock'],
    testEnvironment: '<rootDir>/build/jest/env.js',
    testRegex: '(/__tests__/[^acceptance]*|(\\.|/)(unit))\\.[j|t]sx?$',
    testPathIgnorePatterns: ['node_modules/'],
    testURL: 'http://localhost',
    testRunner: 'jest-circus/runner',
    moduleFileExtensions: ['tsx', 'jsx', 'ts', 'js', 'json', 'pegjs'],
    moduleDirectories: [
        'node_modules',
        '<rootDir>/javascript/demo'
    ],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/build/jest/styleMock.js'
    },
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    coverageReporters: ['json-summary'],
    testMatch: null,
    // watchPlugins: ['./build/jest/repeat-watch-plugin'],
};
