"use strict";

const co = require('co')
const model = require('../models/index')
const Club = model.Club

// GET /api/clubs
const index = function* (next) {
  const _this = this
  Club.find({}, function(err, club) {
    //_this.body = yield { club: club }
    console.log(club)
  })
  this.body = { msg: 'hello' }
}

// GET /api/clubs/:id
const show = function* (next) {
  this.body = this.params
}

// GET /api/clubs/new
const New = function* (next) {
  this.body = { hi: 'hello' }
}

// POST /api/clubs

module.exports = {
  index: index,
  show: show,
  new: New
}