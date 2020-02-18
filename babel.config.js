const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: 11,
        esmodules: true,
      },
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
  '@babel/preset-react',
]

module.exports = { presets }
