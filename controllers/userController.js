const User = require('../models/User')
const Category = require('../models/Category')

const userController = {
    index: (req, res) => {
        User.find({}).populate('categories')
            .then((allUsers) => {
                res.send(allUsers)
            })
    },
    create: (req, res) => {
        User.create(req.body)
            .then((newUser) => {
                res.send(newUser)
            })
    },
}

module.exports = userController