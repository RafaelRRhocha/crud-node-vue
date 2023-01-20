const { User } = require('../database/models');

const createUser = async (req, res) => {
  try {
    const body = req.body;
    const existingUser = await User.findOne({ where: { email: body.email }});
    if (existingUser) {
      return res.status(409).send({ error: 'Email já cadastrado!' });
    } else {
      const user = await User.create(body);
      return res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao cadastrar usuário', error });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao procurar todos os usuários', error });
  }
};

const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send({ message: 'Erro ao procurar usuário pelo id', error });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const existingUser = await User.findOne({ where: { email: updatedData.email }});
    if (existingUser) {
      return res.status(409).send({ error: 'Email já cadastrado!' });
    } else {
      await User.update(updatedData, { where: { id } });
      res.status(200).send({ message: 'Usuário atualizado com sucesso' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar usuário', error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    res.status(200).send({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).send({ message: 'Erro ao excluir usuário', error });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUsersById,
  updateUser,
  deleteUser,
};
