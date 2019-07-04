const { getWebpackConfig } = require('@gem-mine/script')
const config = getWebpackConfig('prod')

module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["react", "jest"],
  "extends": [
    "standard",
    "standard-react",
    "import"
  ],
  "rules": {
    "camelcase": 0,
    "no-var": "error",
    "linebreak-style": 0,
    "object-curly-newline": 0,
    "semi": ["error", "never"],
    "space-before-function-paren": 0,
    "comma-dangle": ["error", "never"],
    "jsx-quotes": ["error", "prefer-double"],
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "no-debugger": process.GEM_MINE_SCRIPT_ENV === 'dev' ? 0 : 2,
    "standard/no-callback-literal": 0,
    "react/jsx-first-prop-new-line": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-max-props-per-line": [2, { "maximum": 5, "when": "multiline" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react/prop-types": [
      0, {
        ignore: ['children']
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": config
      },
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx", ".css", ".less", ".scss"]
      }
    }
  },
  "env": {
    "browser": true,
    "amd": true,
    "es6": true,
    "node": true,
    "mocha": true,
    "jest/globals": true
  },
  "globals": {
    "ENV": true
  }
}
