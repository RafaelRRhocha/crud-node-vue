const Router = require('express');
const {
  getAllUsers,
  createUser,
  getUsersById,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUsersById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;