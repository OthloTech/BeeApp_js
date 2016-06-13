"use strict";

const Router = require('koa-router')
const path = require('path')

const route = (app) => {
  const restApiRouter = new Router({
  	prefix: '/api'
  })

  restApiRouter
    .get('/', function* (next) {
      this.body = 'ok'
    })

  app
    .use(restApiRouter.routes())
    .use(restApiRouter.allowedMethods())  
}

module.exports = route
