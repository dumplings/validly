const presets = [
  ['@babel/env', {
    targets: {
      edge: '11',
      firefox: '35',
      chrome: '48',
      safari: '9.1'
    },
    useBuiltIns: 'usage'
  }]
]

module.exports = { presets }
