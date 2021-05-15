
const { commitReader } = require('../../services/commitReader');

exports.acessCommits = async (req, res) => {

  const user = req.user;
  const repo = req.repo;

  let commits = await commitReader(user.username, repo.name);

  return res.json({
    data: commits
  });

};