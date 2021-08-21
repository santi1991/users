module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-console': 'off',
        'no-unused-vars': 'warn',
        'no-debugger': 'warn',
        'no-var': 'error',
        // 'indent': ['error', 'tab', {
        // 	'SwitchCase': 1,
        // 	'ignoreComments': true,
        // 	'ObjectExpression': 1,
        // 	'ArrayExpression': 1
        // }],
        'semi': ['warn', 'always'],
        'prefer-const': ['warn', {
            'destructuring': 'all'
        }],
        'comma-dangle': ['warn', {
            'arrays': 'only-multiline',
            'objects': 'only-multiline',
            'imports': 'only-multiline',
            'exports': 'only-multiline',
            'functions': 'never'
        }],
        'quotes': ['warn', 'single', { 'allowTemplateLiterals': true }],
        'no-duplicate-imports': 'error',
        'space-before-blocks': ['warn', 'always'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-bracket-newline': ['warn', 'consistent'],
        'object-curly-spacing': ['warn', 'always'],
        'object-curly-newline': ['warn', { 'consistent': true }],
        'jsx-quotes': ['warn', 'prefer-single'],
        'max-len': ['warn', { 'code': 180 }],
        'brace-style': ['warn', 'stroustrup', { 'allowSingleLine': true }],
        'react/prop-types': 'off', // "warn" 
        'react/no-unused-prop-types': 'warn',
        'react/jsx-key': 'error',
        'react/jsx-equals-spacing': [2, 'never'],
        'react/no-direct-mutation-state': 'error',
    }
};
