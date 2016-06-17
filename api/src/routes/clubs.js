"use strict";

const co = require('co')
const model = require('../models/index')
const Club = model.Club

// GET /api/clubs
const index = function* (next) {
  const clubs = yield Club.find({}).exec()
  this.body = clubs
}

// GET /api/clubs/:id
const show = function* (next) {
  const id = this.params.id
  const club = yield Club.find({_id: id}).exec()
  this.body = club
}

// POST /api/clubs/create
const create = function* (next) {
  console.log(this.request.body)
  this.body = { hi: 'hello' }
}

// POST /api/clubs/:id/edit
const edit = function* (next) {
  console.log(this.params.id)
  console.log(this.request.body)
  this.body = this.request.body
}

// POST /api/clubs/:id/destroy
const destroy = function* (next) {
  console.log(this.params.id)
  this.body = this.request.body
}

// POST /api/clubs

module.exports = {
  index: index,
  show: show,
  create: create,
  edit: edit,
  destroy: destroy
}