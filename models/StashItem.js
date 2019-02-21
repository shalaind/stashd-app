const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const StashItem = new Schema({

    title: String,

    link: String,

})

module.exports = mongoose.model('StashItem', StashItem)