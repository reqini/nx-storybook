const path = require('path')
const appRootDir = require('app-root-dir')

module.exports = {
  // stories: ['../stories/**/*.(ts|tsx|js|jsx|mdx)'],
  stories: ['../stories/**/*.js*'],
  addons: [
    // '@storybook/preset-create-react-app',
    // '@storybook/addon-info'
    // '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@harelpls/storybook-addon-materialui',
    '@storybook/addon-viewport'
  ],
  webpackFinal: config => {
    config.resolve.alias.Components = path.resolve(__dirname, '../src')
    config.resolve.alias.components = path.resolve(__dirname, '../src')
    // config.resolve.alias.react = path.join(appRootDir.get(), 'node_modules', 'react')

    // config.module.rules.push({
    //   enforce: 'pre',
    //   test: /\.(js|jsx)$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader',
    //   options: {
    //     reporter: 'consola',
    //     formatter: 'codeframe',
    //     cache: true
    //   }
    // })

    return config
  }
}
