const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path');

module.exports = {
  mode: 'development', // production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'] // import 할때 확장자 생략 가능
  },
  entry: {
    app: path.join(__dirname, './main.js') // package 경로를 위해 path.join() 메소드 사용
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader',
    }, {
      test: /\.css$/,
      use: [
        'vue-style-loader',
        'css-loader',
      ]
    }],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  }
};