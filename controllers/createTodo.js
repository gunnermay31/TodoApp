//import th model
// all the routes must be saved in different files and then imported in the index.js

const Todo = require("../models/Todo");
//define route handler
// all network calls will be async main thread will be running as it is and should not wait for the 
// db process to complete
const createTodo = async function(req,res){
    try {
            //extract title and description from reauest body
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            const newTodo = new Todo({ title, description });
            const response = await newTodo.save();
            
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response, 
                    message:'Entry Created Successfully'
                }
            )
    }
    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({ // this means what should be displayed in the message of the response
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}

//mongodb-comunity
// mongod --config /opt/homebrew/etc/mongod.conf

module.exports = {createTodo};