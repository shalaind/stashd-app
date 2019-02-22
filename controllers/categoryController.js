const Category = require('../models/Category')

const categoryController = {
    index: (req, res) => {
        Category.find({}).populate('stashItems')
            .then((allCategories) => {
                res.send(allCategories)
            })
    },
   
}

module.exports = categoryController