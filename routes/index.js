const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const categoryController = require('../controllers/categoryController')
const stashItemController = require('../controllers/stashItemController')

//shows all users CHECK
router.get('/api/user', userController.index)
//shows specific user and populates categories CHECK
router.get('/api/user/:id', userController.show)
//creates a new user CHECK
router.post('/api/user', userController.create)
//updates the user CHECK
router.patch('/api/user/:id', userController.update)
//deletes a user CHECK 
router.delete('/api/user/:id', userController.delete)

//shows all the categories added for specific user CHECK
router.get('/api/user/:userId/category', categoryController.index)
//shows specific category and populates stash items CHECK
router.get('/api/user/:userId/category/:id', categoryController.show)
//add a new category for a specific user CHECK
router.post('/api/user/:userId/category', categoryController.create)
//deletes category CHECK
router.delete('/api/category/:id', categoryController.delete)

//shows specific category and populates stash list CHECK
router.get('/api/category/:categoryId/stash-items', stashItemController.index)
//adds a stash item to a specific category CHECK
router.post('/api/category/:categoryId/stash-items', stashItemController.create)
// router.delete('/api/category/:categoryId/stash-items/:id', stashItemController.delete)
router.delete('/api/stash-items/:id', stashItemController.delete)

module.exports = router