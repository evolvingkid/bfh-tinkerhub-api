const User = require('../models/user');
const axios = require('../config/axiosConfig');


exports.listUsers = async (req, res) => {

    try {

        let userData = await User.find(req.query);
        return res.json({ data: userData });

    } catch (error) {

        return res.status(500).json({ error: " Error Occured" })
    }

};

exports.userByID = async (req, res, next, id) => {

    try {
        const username = id;

        let user = await User.findOne({ username: id });

        if (!user) {
            const url = `/users/${username}`;
            const responce = await axios.get(url);
            console.log(responce);
            const body = responce.data;

            user = User({
                username: body.login,
                image: body.avatar_url,
                url: body.url,
                htmlUrl: body.html_url
            });

            await user.save();
        }

        req.user = user;

        next();

    } catch (error) {

        if (error.response) {
            if (error.response.status === 404) {
                return res.status(404).json({ error: "User Not found" })
            }
        }

        return res.status(500).json({ error: " Error Occured" })

    }

};