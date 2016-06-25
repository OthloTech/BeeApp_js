"use strict";

const co = require('co')
const model = require('../models/index')
const Club = model.Club

var clubsJSON = new Array(10);
for(let i=0; i < 10; i++) {
  clubsJSON[i] = {
    _id: i,
    categoryId: i,
    name: `sample${i}`,
    isPublic: true,
    isOfficial: true,
    isGirlsOnly: true,
    body: 'asamsoaskaosmaoskaosmaosams',
    image: 'https://octodex.github.com/images/octobiwan.jpg'
  }
}

// GET /api/clubs
const index = function* (next) {
  const clubs = yield Club.find({}).exec()
  //this.body = clubs

  this.body = clubsJSON;
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

module.exports = {
  index: index,
  show: show,
  create: create,
  edit: edit,
  destroy: destroy
}
