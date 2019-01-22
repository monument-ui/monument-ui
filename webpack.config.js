const env = require('yargs').argv.env;

const libraryName = 'monument-ui';

let outputFile, mode, devtool;

if (env === 'build') {
  mode = 'production';
  outputFile = `${libraryName}.min.js`;
  devtool = false;
} else {
  mode = 'development';
  outputFile = `${libraryName}.js`;
  devtool = 'source-map';
}

const config = {
  mode,
  entry: `${__dirname}/src/index.tsx`,
  externals: ['react', 'react-dom', 'rgbcolor', 'styled-components'],
  devtool,
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: 'MonumentUI',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'global'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.tsx']
        }
      }
    ]
  }
};

module.exports = config;
