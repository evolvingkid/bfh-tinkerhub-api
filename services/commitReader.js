const axios = require('../config/axiosConfig');


exports.commitReader = async (username , repo) => {

  const url = `repos/${username}/${repo}/commits`
  const response = await axios.get(url)

  const repoUrlData = response.data;

  if (!repoUrlData) {
    return res.status(404).json({ msg: "No Commit Found" })
  }

  let date = [];

  let commits = []

  for (let index = 0; index < repoUrlData.length; index++) {

    commitsModel = {
      author: {
        name: repoUrlData[index].commit.author.name,
        email: repoUrlData[index].commit.author.email,
      },
      committer: {
        name: repoUrlData[index].commit.committer.name,
        email: repoUrlData[index].commit.committer.email,
      },
      date: repoUrlData[index].commit.committer.date,
      message: repoUrlData[index].commit.message,
      id: repoUrlData[index].node_id,
      url: repoUrlData[index].commit.url,
    }

    commits.push(commitsModel);


    let cropDate = repoUrlData[index].commit.committer.date.toString().split('T');

    let commitDate = cropDate[0];

    if (!date.length) {
      date.push({ date: commitDate, commit: 1 });
      continue;
    }

    let flag = 0;

    for (let j = 0; j < date.length; j++) {

      if (date[j].date === commitDate) {
        date[j].commit++;
        flag = flag + 1;
        break;
      }
    }

    if (flag === 0) {
      date.push({ date: commitDate, commit: 1 });
    }


  }

  return date;

};