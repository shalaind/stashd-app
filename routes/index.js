const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const categoryController = require('../controllers/categoryController')
const stashItemController = require('../controllers/stashItemController')


router.get('/api/user', userController.index)
router.post('/api/user', userController.create)
router.patch('/api/user/:userId', userController.update)
router.delete('/api/user/:userId', userController.delete)

router.get('/api/category', categoryController.index)
router.post('/api/category', categoryController.create)
router.delete('/api/category/:categoryId', categoryController.delete)

router.get('/api/stash-item', stashItemController.index)
router.post('/api/stash-item', stashItemController.create)
router.delete('/api/stash-item/:stashItemId', stashItemController.delete)


module.exports = router