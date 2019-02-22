const StashItem = require('../models/StashItem')
const Category = require('../models/Category')


const stashItemController = {
    index: (req, res) => {
        const catId = req.params.categoryId
        Category.findById(catId).populate('stashItems')
            .then((cat)=> {
                res.send(cat)
            })
    },
    create: (req, res) => {
        const catId = req.params.categoryId
        Category.findById(catId)
            .then((oneCat) => {
                StashItem.create(req.body)
                    .then((stashItem) => {
                        oneCat.stashItems.push(stashItem)
                        oneCat.save()
                        res.send(stashItem)
                    })
            })
    },

    delete: (req, res) => {
        console.log('req.params.id')
        StashItem.findByIdAndDelete(req.params.id)
            .then(() => {
                res.sendStatus(200)
            })
    }
   
}

module.exports = stashItemController