const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.js');

/* GET users listing. */
router.get('/',userController.index);
router.get('/:userId',userController.get);

module.exports = router;
