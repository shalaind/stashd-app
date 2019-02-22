const StashItem = require('../models/StashItem')
const Category = require('../models/Category')


const stashItemController = {
    index: (req, res) => {
        StashItem.find({})
            .then((allStashes) => {
                res.send(allStashes)
            })
    },
    create: (req, res) => {
        const catId = req.params.categoryId
        Category.findById(catId).then(
            (oneCat) => {
                StashItem.create(req.body)
                    .then((stashItem) => {
                        oneCat.stashItems.push(stashItem)
                        oneCat.save()
                    })
            })
    },
    delete: (req, res) => {
        StashItem.findByIdAndDelete(req.params.stashItemId)
            .then(() => {
                res.sendStatus(200)
            })
    }
   
}

module.exports = stashItemController