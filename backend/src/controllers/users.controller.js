const { User } = require('../database/models');

const createUser = async (req, res) => {
  const { body } = req;
  const user = await User.create(body);
  return res.status(200).json(user);
};

const getAllUsers = async (req, res) => {
  const users = await User.findAll();
  if (!users) res.status(404).json({ message: 'users not found' });
  return res.status(200).json(users);
};

const getUsersById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  if (!user) res.status(404).json({ message: 'user not found' });
  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  await User.update({ name, email }, { where: { id } });
  const user = await User.findOne({ where: { id } });
  if (!user) res.status(404).json({ message: 'user not found' });
  return user;
};

const deleteUser = async (req, _res) => {
  const { id } = req.params;
  const user = await User.findOne({ where: { id } });
  await User.destroy(user);
};

module.exports = {
  createUser,
  getAllUsers,
  getUsersById,
  updateUser,
  deleteUser,
};
