const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const StashItem = new Schema({

    title: String,

    link: String,

    linkPreview: {
        description: String, 
        image: String,
        title: String,
        url: String

    }

})

module.exports = mongoose.model('StashItem', StashItem)