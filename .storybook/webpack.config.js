const path = require('path')
const webpack = require('webpack')
// your app's webpack.config.js
const custom = require('../build/webpack.dev.config')

module.exports = async ({ config, mode }) => {
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../'),
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../node_modules')
  ]
  config.resolve.extensions.push('.ts')
  config.plugins.push(
    new webpack.DefinePlugin({
      IS_STORYSHOT: JSON.stringify(process.env.IS_STORYSHOT)
    })
  )
  return {
    ...config,
    module: { ...config.module, rules: custom.module.rules }
  }
}