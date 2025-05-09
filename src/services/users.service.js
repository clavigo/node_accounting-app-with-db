const {
  models: { User },
} = require('../models/models');

const randomId = () => {
  return Date.now() + Math.floor(Math.random() * 1000);
};

const getAll = () => {
  return User.findAll();
};

const create = (name) => {
  const newUser = User.create({ name });

  return newUser;
};

const getById = async (id) => {
  const targetUser = await User.findOne({
    where: {
      id,
    },
  });

  return targetUser;
};

const remove = (id) => {
  return User.destroy({
    where: {
      id,
    },
  });
};

const update = async (name, id) => {
  await User.update(
    { name },
    {
      where: {
        id,
      },
    },
  );

  return User.findByPk(id);
};

// const resetUsers = () => {
//   users.splice(0, users.length);
// };

module.exports = {
  getAll,
  create,
  getById,
  remove,
  update,
  // users,
  randomId,
  // resetUsers,
};
