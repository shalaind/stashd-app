const User = require('../models/User')
const Category = require('../models/Category')
const StashItem = require('../models/StashItem')
const mongoose = require('./connection')


const stash1 = new StashItem({
    title: 'You',
    link: 'https://www.netflix.com/title/80211991',
    linkPreview: {
        image: ''

    }

})

const stash2 = new StashItem({
    title: 'Safe',
    link: 'https://www.netflix.com/title/80201500',
    linkPreview: {
        image: ''

    }

})

const stash3 = new StashItem({
    title: 'Universal Laws',
    link: 'https://www.youtube.com/watch?v=zEr-90Cpj_Q',
    linkPreview: {
        image: ''

    }
})

const stash4 = new StashItem({
    title: 'Decalcify your third eye',
    link: 'https://www.youtube.com/watch?v=GTkXCO1G6no',
    linkPreview: {
        image: ''
    }
})

const category1 = new Category({

    title: 'Netflix & Chill',

    stashItems: [stash1, stash2]

})

const category2 = new Category({

    title: 'Stay Woke Vids',

    stashItems: [stash3, stash4]

})

const laindoe = new User({

    username: 'laindoe',

    email: 'laindoe@gmail.com',

    password: 'stashed',

    profilePic: 'https://i.imgur.com/3hrdK1Z.jpg',

    categories: [category1, category2]
})

User.remove({})

    .then(() => Category.remove({}))

    .then(() => StashItem.remove({}))

    .then(() => StashItem.insertMany([stash1, stash2, stash4, stash3]))

    .then(() => Category.insertMany([category1, category2]))

    .then(() => laindoe.save())

    .then(() => console.log('Successful Save'))

    .then(() => mongoose.connection.close())