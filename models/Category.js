const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Category = new Schema({

    title: String,

    stashItem: [

        {
            type: Schema.Types.ObjectId,
            ref: 'StashItem'
        }
    ]
})

module.exports = mongoose.model('Category', Category)