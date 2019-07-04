module.exports = {
  presets: [
    '@babel/preset-react',
    ['@babel/preset-env', {
      targets: {
        ie: '9'
      },
      useBuiltIns: 'entry',
      corejs: 3,
      modules: 'cjs'
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    'add-module-exports',
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['import', {
      libraryName: 'fish',
      libraryDirectory: 'es',
      style: true
    }]
  ]
}
