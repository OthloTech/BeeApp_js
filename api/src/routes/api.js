"use strict";

const Router = require('koa-router')
const path = require('path')
const json = require('koa-json')
const model = require('../models/index')
const body = require('koa-body')()

const Club = model.Club
const ClubDetail = model.ClubDetail

const clubAPI = require('./clubs')


const route = (app) => {

  // json対応
  app.use(json())

  const clubRouter = new Router({
  	prefix: '/api/clubs'
  })

  clubRouter
    .get('/', clubAPI.index)
    .get('/:id', clubAPI.show)
    .post('/create', body, clubAPI.create)
    .post('/:id/edit', body, clubAPI.edit)
    .post('/:id/destroy', body, clubAPI.destroy)

  app
    .use(clubRouter.routes())
    .use(clubRouter.allowedMethods())  
}

module.exports = route
