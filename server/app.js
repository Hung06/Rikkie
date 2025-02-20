
const express =require('express');
const fs= require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
const filePath = './data/users.json';
const checkExist = (req, res, next) => {
    let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
    let { id } = req.params;
    let { email } = req.body;

    let user = users.find(user => user._id === id || user.email === email);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // Lưu user vào req để dùng trong route handler
    next(); // Tiếp tục xử lý route
};

module.exports = checkExist;
// 🛠 Xử lý lỗi file không tồn tại
const getUsers = () => {
    if (!fs.existsSync(filePath)) return [];
    let data = fs.readFileSync(filePath, { encoding: 'utf-8' }) || "[]";
    return JSON.parse(data);
};
app.get("/",(req,res)=>{
    res.send('<h1>This is homepage</h1>');
});
app.get("/overview",(req,res)=>{
    res.send('<h1>This is overview page</h1>');
});
app.get("/product",(req,res)=>{
    res.send('<h1>This is product page</h1>');
});
app.get("/api/v1/users", (req, res) => {
    let users = getUsers();
    res.send(users);
});
app.get("/api/v1/users/:id",(req,res)=>{
    let users= fs.readFileSync(`./data/users.json`,{encoding:'utf-8'});
    users=JSON.parse(users);
    let findUser=users.find(user=>user.id==req.params._id);
    if(!findUser){
        res.status(404).send("User not found");
        return;
    }
    else{
        res.send(findUser);
    }
})
app.post("/api/v1/users", checkExist, (req, res) => {
    let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

    if (users.find(user => user.email === req.body.email)) {
        return res.json({ message: "User already exists" });
    }

    let newUser = { ...req.body, _id: Math.random().toString(36).substr(2, 9) };
    users.push(newUser);
    fs.writeFileSync("./data/users.json", JSON.stringify(users));
    res.json({ message: "Create user successfully", user: newUser });
});
app.put("/api/v1/users/:id", checkExist, (req, res) => {
    let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
    let userIndex = users.findIndex(user => user._id === req.params.id);

    users[userIndex] = { ...users[userIndex], ...req.body };
    fs.writeFileSync("./data/users.json", JSON.stringify(users));

    res.json({ message: "Update successfully", user: users[userIndex] });
});
app.delete("/api/v1/users/:id", checkExist, (req, res) => {
    let users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));
    users = users.filter(user => user._id !== req.params.id);
    fs.writeFileSync("./data/users.json", JSON.stringify(users));

    res.json({ message: "Delete successfully" });
});
// Các đường dẫn khác → Trả về "PAGE NOT FOUND"
app.use((req, res) => {
    res.status(404).send("<h1>Page not found</h1>");
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});