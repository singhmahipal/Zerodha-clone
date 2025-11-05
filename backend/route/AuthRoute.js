const {Signup, Login, Logout} = require('../controller/AuthController.js');
const { userVerification } = require('../middleware/AuthMiddleware.js');
const router = require('express').Router();

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/logout', Logout);
router.post('/verify', userVerification);

module.exports = router;