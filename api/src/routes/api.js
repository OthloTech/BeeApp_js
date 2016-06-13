"use strict";

const Router = require('koa-router')
const path = require('path')
const json = require('koa-json')
const model = require('../models/index')

const Club = model.Club
const ClubDetail = model.ClubDetail

const clubAPI = require('./clubs')


const route = (app) => {

  // json対応
  app.use(json())

  const restApiRouter = new Router({
  	prefix: '/api'
  })

  restApiRouter
    .get('/', clubAPI.index, function*(next) { this.body = this.club })
    .get('/show/:id', clubAPI.show)
    .get('/new', clubAPI.new)

  app
    .use(restApiRouter.routes())
    .use(restApiRouter.allowedMethods())  
}

module.exports = route
