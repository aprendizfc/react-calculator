// import Node.js path module for path related operations
const path = require('path');
// create our config object
const config = {
  entry: path.join(__dirname, '/client/index.js'), // path to our entry file
  output: { // our output configuration
    path: path.join(__dirname, './public/'), // output path
    filename: 'bundle.js' // output bundled file name
  },
  module: { // define our loaders here
    rules: [ // array of rules to handle different file types
      {
        test: /\.(js|jsx)$/, //checj for .js & .jsx files
        loader: 'babel-loader'
      }
    ]
  }
};

// export our config object
// you may have noticed we are using es5 syntax here. This is because Webpack,
// which would be using this file, expects es5 syntax
module.exports = config;
