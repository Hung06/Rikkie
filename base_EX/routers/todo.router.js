const { match } = require('assert');
const express= require('express');
const router =express.Router();
const fs = require('fs');

router.get("/:id",(req,res)=>{
    res.json({message:"User detail"});
});
router.get("/",(req,res)=>{
    let todo=fs.readFileSync('./data/todo.json','utf-8');
    todo=JSON.parse(todo);
    res.json(todo);
});

router.post("/",(req,res)=>{
    let content=req.body.content;
    let todo ={
        id: Math.random(),
        content:content,
        status: false,
    }
    let todos=fs.readFileSync('./data/todo.json','utf-8');
    todos=JSON.parse(todos);
    todos.push(todo);
    fs.writeFileSync('./data/todo.json',JSON.stringify(todos));

    res.json({message:"todo created successfully"});
});
router.put("/:id",(req,res)=>{
    let id = req.params.id;
    let status = req.body.status;
    let todos=fs.readFileSync('./data/todo.json','utf-8');
    todos=JSON.parse(todos);
    let updateindex= todos.findIndex(function(e,i){
        return e.id === +id;
    });
    todos[updateindex].status=status;
    fs.writeFileSync('./data/todo.json',JSON.stringify(todos));
    res.json({message:"Update scuccessfully",
        id: id,
        
    });
});
router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    let todos=fs.readFileSync('./data/todo.json','utf-8');
    todos=JSON.parse(todos);
    let deleteindex= todos.findIndex(function(e,i){
        return e.id === +id;
    });
    todos.splice(deleteindex,1);
    fs.writeFileSync('./data/todo.json',JSON.stringify(todos));
    res.json({message:"Delete scuccessfully"});
});
module.exports=router;
