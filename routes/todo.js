// here we are mapping the controller to the routes and then these routes will be used in index.js

const express  = require("express");
const router = express.Router();
//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo,getTodoById} = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
//define APi routes
//here all the routes will be stored get put post and delete
router.post("/createTodo", createTodo); // mapping of path to the controller will be done 
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoById);
            //  route     // contoller 

router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;

