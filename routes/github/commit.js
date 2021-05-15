const express = require("express");
const router = express.Router();

const { userByID } = require('../../controllers/user');
const { repoByID } = require('../../controllers/github/repo');
const { acessCommits } = require('../../controllers/github/commits');

router.get("/:username/:repo", acessCommits);

router.param('username', userByID);
router.param('repo', repoByID);
module.exports = router;