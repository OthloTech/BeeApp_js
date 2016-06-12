"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../../../app/build'), ext : '.ect' });
  const staticRoute = new Router()
  const restApiRouter = new Router({
  	prefix: '/api'
  })

  staticRoute
    .get('/', function* (next) {
      const data = {
      	title: 'BeeApp'
      }
      this.body = renderer.render('index.ect', data);
    })
    .get('/hello', function* (next) {
      this.body = 'hello, world'
    })

  restApiRouter
    .get('/', function* (next) {
      this.body = 'ok'
    })
  
  app
    .use(staticRoute.routes())
    .use(restApiRouter.routes())
    .use(restApiRouter.allowedMethods())
    .use(staticRoute.allowedMethods())
}

module.exports = route
