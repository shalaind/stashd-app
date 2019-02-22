const User = require('../models/User')

const reviewController = {
    index: (req, res) => {
        User.find({}).populate('categories')
            .then((allUsers) => {
                res.send(allUsers)
            })
    },
   
}

module.exports = reviewController