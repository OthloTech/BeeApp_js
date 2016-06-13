"use strict";

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClubSchema = Schema({
  _id: Number,
  categoryId: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, default: 'noimage.png' },
  isPublic: { type: Boolean, default: true },
  isOfficial: { type: Boolean, default: false },
  isGirlsOnly: { type: Boolean, default: false },
  isRecruitment: { type: Boolean, default: false },
  body: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  clubDetail: { type: Schema.Types.ObjectId, ref: 'clubDetail' }
})

module.exports.Club = mongoose.model('Club', ClubSchema)
