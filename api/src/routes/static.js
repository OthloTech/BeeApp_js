"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')
const serve = require('koa-static')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../../../app/build'), ext : '.ect' });
  const staticRoute = new Router()

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

  app
    .use(staticRoute.routes())
    .use(staticRoute.allowedMethods()) 
}

module.exports = route
