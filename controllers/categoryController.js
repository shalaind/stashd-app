const Category = require('../models/Category')
const User = require('../models/User')


const categoryController = {
    index: (req, res) => {
        Category.find({}).populate('stashItems')
            .then((allCategories) => {
                res.send(allCategories)
            })
    },
    create: (req, res) => {
        const userId = req.params.id
        User.findById(userId).then(
            (oneUser) => {
                Category.create(req.body)
                    .then((newCategory) => {
                        oneUser.categories.push(newCategory)
                        oneUser.save()
                    })
            })
    }
   
}

module.exports = categoryController