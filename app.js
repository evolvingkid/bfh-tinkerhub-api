// * file for starup programs
const app = require("./api");
const connectDB = require('./config/db');

// * other startup Programs


// * connecting DB 
connectDB();


// * connetcting PORT
const PORT = process.env.PORT || 4000;
let server = app.listen(PORT, () => console.log(`Server starts on  ${PORT}`));

// ! required for unit testing API
module.exports = server;