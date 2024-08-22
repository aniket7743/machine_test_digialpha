import User  from'../models/users.js';
import 
// Register User
const registerUser = async (req, res) => {
  try {
    let user = new User(req.body);
    const { fisrtname, lastName, email, phone } = req.body
    
  } catch (error) {
    
  }
};

// Get User by ID
const getUserById = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};

// Update User
const updateUser = async (req, res) => {
  try {

  } catch (error) {
    
  }
};

// Delete/Disable User
const deleteUser = async (req, res) => {
  try {

  } catch (error) {
    
  }
};

// List All Users
const listUsers = async (req, res) => {
  try {

  } catch (error) {
    
  }
};

export  {
  registerUser,
  getUserById,
  updateUser,
  deleteUser,
  listUsers,
};