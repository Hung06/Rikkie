const express= require('express');
const router =express.Router();
router.get("/:id",(req,res)=>{
    res.json({message:"User detail"});
});
router.get("/",(req,res)=>{
    res.json({message:"User list"});
});

router.post("/",(req,res)=>{
    res.json({message:"Create user"});
});
router.put("/:id",(req,res)=>{
    res.json({message:"Update user"});
});
router.delete("/:id",(req,res)=>{
    res.json({message:"Delete user"});
});
module.exports=router;
