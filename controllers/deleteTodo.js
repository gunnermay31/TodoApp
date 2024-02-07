//import th model
// all the routes must be saved in different files and then imported in the index.js
const Todo = require("../models/Todo");
//define route handler
// all network calls will be async main thread will be running as it is and should not wait for the 
// db process to complete
const deleteTodo = async function(req,res){
    try {
        const {id} = req.params;

        await Todo.findByIdAndDelete(id)

        res.status(200)
        .json({
            status:true,
            message:`deleted sucessfully `
        })
        
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

module.exports = {deleteTodo};