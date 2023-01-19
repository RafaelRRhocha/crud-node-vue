const Router = require('express');
const UserController = require('../controllers/users.controller');

const router = Router();

// router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
// router.get('/:id', UserController.getUsersById);
// router.put('/:id', UserController.updateUser);
// router.delete('/:id', UserController.deleteUser);

module.exports = router;