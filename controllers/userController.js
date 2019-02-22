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
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.userId)
            .then(() => {
                res.sendStatus(200)
            })
    }
}

module.exports = userController