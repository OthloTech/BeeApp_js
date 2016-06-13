const mongoose = require('mongoose')

// MongoDBに接続
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/beeapp_dev'
mongoose.connect(mongoURI)

// 接続イベントを利用してログ出力
mongoose.connection.on('connected', function() {
  console.log('mongodb is connected at ' + mongoURI)
})

module.exports.Club = require('./club').Club;
module.exports.ClubDetail = require('./club_detail').ClubDetail;
