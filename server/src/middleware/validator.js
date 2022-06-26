const { check } = require('express-validator');

let validator = {};

let registerValidator = () => {
    return [
        check('username', 'Username does not empty').not().isEmpty(),
        check('username', 'Username must be Alphanumeric').isAlphanumeric(),
        check('username', 'Username more than 6 degits').isLength({ min: 6 }),
        check('email', 'Invalid does not Empty').not().isEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Password more than 6 degits').isLength({ min: 6 })
    ];
};

let loginValidator = () => {
    return [
        check('username', 'Username does not empty').not().isEmpty(),
        check('username', 'Username must more than 6 digits').isLength({ min: 6 }),
        check('password', 'Password must more than 6 digits').isLength({ min: 6 }),
    ];
};

let serviceValidator = () => {
    return [
        check('service_name', 'service name does not empty').not().isEmpty(),
    ];
};

validator = {
    register: registerValidator,
    login: loginValidator,
    service: serviceValidator,
};

module.exports = validator;