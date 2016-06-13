"use strict";

const path = require('path')
const serve = require('koa-static')

const route = (app) => {

  // ルート定義
  const staticRoute = require('./static')(app)
  const restApiRouter = require('./api')(app)
  
  // 静的配信 js, css
  app
    .use(serve(path.resolve(__dirname, '../../../app/build')))
}

module.exports = route
