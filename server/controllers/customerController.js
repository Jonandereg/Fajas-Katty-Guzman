const users = require('../models/users');

const register = async (req, res) => {
  try {
    let regInfo = req.body;
    const existingUser = await users.findOne({ email: regInfo.email });
    if (existingUser) res.send('email already exist');
    else {
      let newUser = await users.create(regInfo);
      res.status(201);
      res.send(newUser);
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await users.findOne({ email });
    if (!user) res.send('wrong info');
    else res.send(user);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.uid;
    const updatedValue = req.body;
    const user = await users.findByIdAndUpdate({ _id: userId }, updatedValue, { new: true });
    if (!user) res.send('notfound');
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login, updateUser };
