module.exports = {
  'root': true,
  'env': {
    'es6': true,
    'node': true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2015,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [ 'error', 2 ],
    'linebreak-style': [ 'off', 'windows' ],
    'quotes': [ 'off', 'single'],
    'semi': [ 'error', 'never' ],
    'no-console': 'off',
  },
}