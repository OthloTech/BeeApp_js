"use strict";

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const defaultPassword = function(length) {
  const password = Math.random().toString(36).slice(-length);
}

const ClubDetailSchema = Schema({
  _id: Number,
  email: String,
  facebook: String,
  twitter: String,
  url: String,
  frequency: String,
  password: { type: String, default: defaultPassword(8) },
  place: String,
  scale: String,
  budget: String,
  drinkingFrequency: String,
  femaleRatio: Number,
  maleRatio: Number,
  word: String
})

module.exports.ClubDetail = mongoose.model('ClubDetail', ClubDetailSchema)
