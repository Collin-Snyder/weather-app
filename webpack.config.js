module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$|\.js$/],
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        },
        {
          test: [/\.css$|\.scss$|\.sass$/],
          exclude: /node_modules/,
          use: ['css-loader', 'style-loader']
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/client/dist'
    }
  };
