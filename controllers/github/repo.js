const Repo = require('../../models/repos');
const axios = require('../../config/axiosConfig');

exports.repoByID = async (req, res, next, id) => {
    try {

        const user = req.user;

        let repo = await Repo.findOne({ user: user._id });

        if (!repo) {

            const url = `repos/${user.username}/${id}`
            const response = await axios.get(url);
            const repoData = response.data;

            repo = Repo({
                name: repoData.name,
                fullName: repoData.full_name,
                repoID: repoData.id,
                nodeID: repoData.node_id,
                user: user._id,
                description: repoData.description,
                url: repoData.url,
                clone: repoData.clone_url,
                laguage: repoData.language,
                defaultBranch: repoData.default_branch
            });

            await repo.save();

        }

        req.repo = repo;

        next();

    } catch (error) {

        if (error.response) {
            if (error.response.status === 404) {
                return res.status(404).json({ error: "User Not found" })
            }
        }

        return res.status(500).json({ error: " Error Occured" });

    }


};