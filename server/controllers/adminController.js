const users = require('../models/users');

const getUsers = async (req, res) => {
  try {
    const myUsers = await users.find();
    res.send(myUsers);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const uid = req.params.uid;
    const updatedValues = req.body;
    const updatedUser = await users.findByIdAndUpdate({ _id: uid }, updatedValues, { new: true });
    if (!updatedUser) res.sendStatus(404);
    res.send(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const uid = req.params.uid;
    const deletedUser = await users.findByIdAndDelete({ _id: uid });
    if (!deletedUser) res.sendStatus(404);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers, updateUser, deleteUser };
