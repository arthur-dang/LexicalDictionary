module.exports = {
  root: true,
  extends: [
    'airbnb',
    '@react-native-community',
    ],
  parser: 'babel-eslint',
  'env': {
    jest: true,
  },
  rules: {
    'prettier/prettier': 0,
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
  },
  globals: {
    "fetch": false,
  }
};
