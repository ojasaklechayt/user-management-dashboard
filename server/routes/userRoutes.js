const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/UserController');

const router = express.Router();

const userValidation = [
    body('firstName').trim().notEmpty().withMessage('First name is required'),
    body('lastName').trim().notEmpty().withMessage('Last name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('department').trim().notEmpty().withMessage('Department is required')
];

router.get('/', userController.getUsers);
router.post('/', userValidation, userController.createUser);
router.put('/:id', userValidation, userController.updateUser);
router.get('/:id', userController.getUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;