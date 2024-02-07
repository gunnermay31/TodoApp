const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = function(){
    mongoose.connect(process.env.DATABASE_URL)
    .then(function(){
        console.log("the connection is sucessful");
    })
    .catch(function(){
        console.log("error occured");
        console.error(error.message);
    })
}

module.exports = dbConnect;