const { User } = require("../database/models/user");

const createUser = async (req, res) => {
  const { body } = req;
  const user = await User.create(body);
  return res.status(200).json(user);
};

// const getAllUsers = async (req, res) => {
//   const users = await User.findAll();
//   if (!users) res.status(404).json({ message: 'users not found' });
//   return res.status(200).json(users);
// }

// const getUsersById = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findOne({ where: { id } });
//   if (!user) res.status(404).json({ message: 'user not found' });
//   return res.status(200).json(user);
// }

// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findOne({ where: { id } });
//   if (!user) res.status(404).json({ message: 'user not found' });
// }

// const deleteUser = async (req, res) => {
//   const user = await User.findOne({ where: { id } });
//   if (!user) res.status(404).json({ message: 'user not found' });
//   await User.destroy({ where: { id } });
// };

module.exports = {
  createUser,
  // getAllUsers,
  // getUsersById,
  // updateUser,
  // deleteUser
};

