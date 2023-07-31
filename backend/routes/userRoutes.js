const router = require("express").Router();
const userController = require('../controllers/userController');

// Registration route
router.post('/register', userController.registerUser);

// Login route
router.post('/login', userController.loginUser);

// Get all users route
router.get('/', userController.getAllUsers);

// Get a user by ID route
router.get('/:userId', userController.getUserById);

// Update user route
router.put('/:userId', userController.updateUser);

// Delete user route
router.delete('/:userId', userController.deleteUser);

module.exports = router;