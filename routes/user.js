const express = require("express");
const router = express.Router();
const { listUsers } = require('../controllers/user');

router.get('/', listUsers);

module.exports = router;