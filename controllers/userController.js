const User = require('../models/User')
const Category = require('../models/Category')

const userController = {


    index: (req, res) => {
        User.find({}).populate('categories')
            .then((allUsers) => {
                res.send(allUsers)
            })
    },

    show: (req, res) => {
        let userId = req.params.id
        User.findById(userId).populate('categories')
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
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body)
            .then((updatedUser) => {
                updatedUser.save()
                res.send(updatedUser)
            })
    },
    delete: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(() => {
                res.sendStatus(200)
            })
    }
}

module.exports = userController