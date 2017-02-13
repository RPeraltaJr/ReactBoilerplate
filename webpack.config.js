module.exports = {
  entry: './app/app.jsx', // webpack entry point
  output: {
    path: __dirname, // path of current folder
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname, // path of current folder
    alias: {
    },
    extensions: ['', '.js', '.jsx'] // file extensions we want to be able to process
  },
  module: { // will tell webpack what to do with JSX file
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'] // tells babel to compile code
        },
        test: /\.jsx?$/, // target every file with a .jsx extension
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
