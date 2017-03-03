'use strict';

var express = require('express');
var pkg = require('../package.json');
var bodyParser = require('body-parser');
var compress = require('compression');
var cors = require('cors');
var routing = require('./routing');

// var db = require('./db');
var app = express();

var Server = {
  'init': ()=>{
    /* istanbul ignore if */
    if( !process.env.NODE_ENV ){
      process.env.NODE_ENV = 'development';
    }

  },

  'start': ()=>{
    Server.init()
    if( !process.env.NODE_ENV ){
      process.env.NODE_ENV = 'development';
    }

    // db.connect();
    app.use(cors());

    app.use(compress());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.options('*', cors());
    routing(app);

    const port = process.env.NODE_PORT || 9000;
    const ip = process.env.NODE_IP || '0.0.0.0';
    this.server = app.listen(port, ip, function() {
      process.title = pkg.name;
      var path = require('path');
      var appDir = path.dirname(require.main.filename);
      console.log(
        `${pkg.name}-v${pkg.version} is listening on port ${port}!
          - NODE_ENV: ${process.env.NODE_ENV}
          - PATH    : ${appDir}
          - PID     : ${process.pid}
        `
      );
    });
  },

  // close( next ){
  //   console.log(`${pkg.name}-v${pkg.version} is shutdown!`);
  //   // db.close();
  //   this.server.close();
  //   return next();
  // }

};


module.exports = Server;
