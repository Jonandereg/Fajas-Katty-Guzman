const users = require('../models/users');

const register = async (req, res) => {
  try {
    let {
      email,
      password,
      firstName,
      lastName,
      gender,
      age,
      mobileNumber,
      phoneNumber,
      address,
      allergies
    } = req.body;
    const existingUser = await users.findOne({ email });
    if (existingUser) res.send('email already exist');
    else {
      let newUser = await users.create({
        email,
        password,
        firstName,
        lastName,
        gender,
        age,
        mobileNumber,
        phoneNumber,
        address,
        allergies
      });
      res.status(201);
      res.send(newUser);
    }
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    //todo
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login };
