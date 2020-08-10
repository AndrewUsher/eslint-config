const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  extends: [
    require.resolve('./index.js'),
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
