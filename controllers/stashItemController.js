const StashItem = require('../models/StashItem')

const stashItemController = {
    index: (req, res) => {
        StashItem.find({})
            .then((allStashes) => {
                res.send(allStashes)
            })
    },
   
}

module.exports = stashItemController