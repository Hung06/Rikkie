const e = require('express');
const express =require('express');
const fs= require('fs');
const app = express();
const port = 3000;
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.get("/users",(req,res)=>{
    let user=fs.readFileSync('./data/users.json',{encoding:'utf-8'});
    user=JSON.parse(user);
    res.send(user);

});
app.get("/users/:id",(req,res)=>{
    console.log(req.params.id);
    let user=fs.readFileSync('./data/users.json',{encoding:'utf-8'});
    user=JSON.parse(user);
    let findUser=user.find(user=>user.id==req.params.id);
    if(!findUser){
        res.status(404).send("User not found");
        return;
    }
    else{
        res.send(findUser);
    }
});
app.post("/users",(req,res)=>{
    console.log(req.body);
    let newUser={...req.body,id:Math.random()};
    let users=fs.readFileSync('./data/users.json',{encoding:'utf-8'});
    users=JSON.parse(users);
    users.push(newUser);
    fs.writeFileSync('./data/users.json',JSON.stringify(users));
    res.json({
        message:"Create user successfully",
    });
});
app.put("/users/:id", (req, res) => {
    let userId = req.params.id; // Lấy id từ URL
    let updatedData = req.body; // Dữ liệu cần cập nhật

    // Đọc danh sách user từ file
    let users = fs.readFileSync("./data/users.json", { encoding: "utf-8" });
    users = JSON.parse(users);

    // Tìm user theo id
    let userIndex = users.findIndex(user => user.id == userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    // Cập nhật thông tin user
    users[userIndex] = { ...users[userIndex], ...updatedData };

    // Ghi lại file JSON
    fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));

    res.json({ message: "User updated successfully", user: users[userIndex] });
});
app.delete("/users",(req,res)=>{
    res.send("Delete user");
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});