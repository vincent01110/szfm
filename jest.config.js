// jest.config.js
export default {
    // ... other Jest configurations ...
    extensionsToTreatAsEsm: ['.js', '.jsx'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    "moduleNameMapper": {
        "^aliases/(.*)$": "<rootDir>/path/to/aliases/$1"
    }
};
