const express = require("express");
const router = express.Router();

const { repoList } = require('../controllers/repo');

router.get('/', repoList);

module.exports = router;