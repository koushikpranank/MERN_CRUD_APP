const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const isAuthenticated = require('../middleware/auth');

// All routes are protected
router.use(isAuthenticated);

// CRUD routes
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/', itemController.createItem);
router.put('/:id', itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
