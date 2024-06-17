module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'no-console': 1,
    'react-hooks/exhaustive-deps': 0,
    'no-unused-expression': 0,
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
