module.exports = {
  ident: 'postcss',
  plugins: [
    require('postcss-calc')(),
    require('postcss-import')(),
    require('postcss-cssnext')()
  ]
}
