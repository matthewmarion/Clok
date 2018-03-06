const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            presets: [
                                ['es2015', { modules: false }],
                                'react',
                                'stage-0'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    node: {
        __dirname: false
    },
    watch: true
}

module.exports = [
    Object.assign(
      {
        target: 'electron-main',
        entry: { main: './src/main.js' }
      },
      commonConfig),
    Object.assign(
      {
        target: 'electron-renderer',
        entry: { index: './src/index.jsx' },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Clok',
                template: './src/index.html'
            })
        ]
      },
      commonConfig)
  ]