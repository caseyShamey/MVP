const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // mode: 'development',
  entry: {
    main: path.join(__dirname, './client/src/index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './client/dist'),
  },
  devtool: '#eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules'],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use:[{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }],
      },
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: ['/node_modules/'],
      }
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [{
      //       loader: 'file-loader',
      //       options: {
      //           name: '[name].[ext]',
      //           outputPath: 'fonts/'
      //       }
      //   }]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}