const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const categoryController = require('../controllers/categoryController')
const stashItemController = require('../controllers/stashItemController')

//shows all users 
router.get('/api/user', userController.index)
//shows specific user and populates categories 
router.get('/api/user/:userId', userController.show)
//creates a new user 
router.post('/api/user/', userController.create)
//updates the user 
router.patch('/api/user/:userId', userController.update)
//deletes a user 
router.delete('/api/user/:userId', userController.delete)

//shows all the categories added for specific user 
router.get('/api/user/:userId/category', categoryController.index)
//shows specific category and populates stash items 
router.get('/api/category/:categoryId', categoryController.show)
//add a new category for a specific user 
router.post('/api/user/:userId/category', categoryController.create)
//deletes category 
router.delete('/api/category/:categoryId', categoryController.delete)

//shows specific category and populates stash list
router.get('/api/category/:categoryId/stash-item', stashItemController.index)
//adds a stash item to a specific category 
router.post('/api/category/:categoryId/stash-item', stashItemController.create)
router.delete('/api/stash-item/:stashItemId', stashItemController.delete)


module.exports = router