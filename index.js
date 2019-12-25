const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  extends: [
    'standard',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2
  }
}
