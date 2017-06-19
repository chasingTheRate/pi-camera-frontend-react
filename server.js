const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.dev.js');
const webpackdevmiddleware = require("webpack-dev-middleware");
const webpackhotmiddleware = require("webpack-hot-middleware");

var app = express();
var server = http.Server(app);

//Webpack Middleware

var compiler = webpack(webpackConfig);
app.use(webpackdevmiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackhotmiddleware(compiler));

// Routes

const dealerLaneRoutes = require('./routes/dealerDocRoutes.js');
app.use( bodyParser.json() );

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/public/index.html'));
});

server.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
