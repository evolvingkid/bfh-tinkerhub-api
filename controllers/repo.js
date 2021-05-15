const Repo = require('../models/repos');

exports.repoList = async (req, res) => {

    try {
        const repoData = await Repo.find(req.query);

        return res.json({ data: repoData });

    } catch (error) {

        return res.status(500).json({ error: " Error Occured" })

    }

};