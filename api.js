const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

// * api configs
const app = express();
app.use(
    express.json({
        extended: false,
    })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// * for API Route Files
const commitRoute = require('./routes/github/commit');
const userRoute = require('./routes/user');
const repoRoute = require('./routes/repo');


// * for API Routes
app.get("/", (req, res) => res.send("BFH API Running"));
app.use("/api/commit", commitRoute);
app.use('/api/users', userRoute);
app.use('/api/repo', repoRoute);

module.exports = app;