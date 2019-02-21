const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const User = new Schema({

    username: String,

    password: String,

    email: String,

    profilePic: String,

    category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }]


})

module.exports = mongoose.model('User', User)