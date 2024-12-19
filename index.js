import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
const app = express();
const port= 3000;
var item;
var items;
let array=[];
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.post("/submit",(req,res)=>{
    items= req.body["Additem"];
    array.push(items);
    res.render("items.ejs",{array});
});
app.post("/delete",(req,res)=>{
    array.pop();
    console.log(array);
    res.render("items.ejs",{array});
})

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});