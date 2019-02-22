const Category = require('../models/Category')
const User = require('../models/User')


const categoryController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('categories')
        .then((allCats) =>
         {
                res.send(allCats)
            })
    },

    show: (req, res) => {
        const catId = req.params.categoryId
        Category.findById(catId).populate('stashItems')
            .then((cat)=> {
                res.send(cat)
            })
    },

    create: (req, res) => {
        const userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                console.log(user)
                Category.create(req.body)
                    .then((newCategory) => {
                        console.log(newCategory)
                        user.categories.push(newCategory)
                        user.save()
                        res.send(newCategory)
                    })
            })
    },
    delete: (req, res) => {
        Category.findByIdAndDelete(req.params.categoryId)
            .then(() => {
                res.sendStatus(200)
            })
    }

}

module.exports = categoryController