import { check } from "express-validator";
const registerUser = [
  check("email")
    .exists()
    .isEmail()
    .withMessage("Valid email is required"),
  check("firstName")
    .exists()
    .isLength({ min: 1 })
    .withMessage("First name is required"),
  check("lastName")
    .exists()
    .isLength({ min: 1 })
    .withMessage("Last name is required"),
  check("phone")
    .exists()
    .isLength({min: 5})
    .withMessage("Phone is required")  
];

const updateUser = [
  check("email")
    .exists()
    .isEmail()
    .withMessage("Valid email is required"),
  check("firstName")
    .exists()
    .isLength({ min: 1 })
    .withMessage("First name is required"),
  check("lastName")
    .exists()
    .isLength({ min: 1 })
    .withMessage("Last name is required"),
];

export default {
  registerUser,
  updateUser,
};