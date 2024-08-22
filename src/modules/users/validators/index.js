import  check from 'express-validator/check'

const registerUser = [
    check('email').exists().isEmail(),isLength({ min: 1}).withMessage('email is required'),
    check('firstName').exists().isLength({ min: 1}).withMessage('First name is required'),
    check('lastname').exists().isLength({min: 1}).withmessage('Last name is required')
]