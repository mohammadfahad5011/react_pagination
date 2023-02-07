const User = require("../models/userModel");

//get all users
const getAllUser = async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  try {
    const users = await User.find({ ...keyword });
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

//create user
const createUser = async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    res.send(newUser);
  } catch (error) {
    res.send(error);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("Delete Success");
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllUser,
  createUser,
  deleteUser,
};
