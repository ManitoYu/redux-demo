'use strict';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');

let server = new WebpackDevServer(webpack(config), {
  proxy: {
    '/api/*': 'http://192.168.162.128:8000'
  },

  publicPath: config.output.publicPath,
  hot: true,
  inline: true
});

server.listen(3000, '192.168.162.128');
