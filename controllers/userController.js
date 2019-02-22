const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({}).populate('categories')
            .then((allUsers) => {
                res.send(allUsers)
            })
    },
   
}

module.exports = userController