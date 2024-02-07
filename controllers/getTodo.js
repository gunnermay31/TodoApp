const Todo = require("../models/Todo");

exports.getTodo = async function(req,res){
    try{
        //fetching all todo items 
        const todos = await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire todo data is fetched"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}

exports.getTodoById = async function(req,res){
    try{
       
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        if(!todo){
            return res.status(404)
            .json({
                status:false,
                message:"not found",
            })
        }
        //data for given id
        res.status(200)
        .json({
            status:true,
            data:todo,
            message:`Todo ${id} data sucessfully fetched`
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }

}
