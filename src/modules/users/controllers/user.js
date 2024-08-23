import mongoose from "mongoose";
import User from "../models/users.js";
const { ObjectId } = mongoose.Types;


/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {Object} The registered user details
 */
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this phone number already exists." });
    }

    const user = new User({
      firstName,
      lastName,
      email,
      phone,
    });
    await user.save();

    res.status(200).json({
      message: "User registered successfully!",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error registering new user." });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {Object} Fetched user details
 */
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    
    const user = await User.findOne({_id: new ObjectId(userId), isDeleted: false});

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving user" });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {Object} updated user details
 */
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { firstName, lastName, email, phone } = req.body;

    const user = await User.findByIdAndUpdate(
      new ObjectId(userId),
      { firstName, lastName, email, phone },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {String} String message for successful output
 */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndUpdate({_id: new ObjectId(userId)},{ isDeleted : true},{ new : true});
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns {Array} Returns array of objects matching the query parameters
 */
const listUsers = async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.query;

    const filter = { isDeleted: false };
    if (firstName) filter.firstName = firstName;
    if (lastName) filter.lastName = lastName;
    if (email) filter.email = email;
    if (phone) filter.phone = phone;

    const users = await User.find(filter);

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving users" });
  }
};
export { registerUser, getUserById, updateUser, deleteUser, listUsers };
