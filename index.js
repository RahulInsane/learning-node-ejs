//USING EJS

const express=require("express");
const app=express();
const path=require("path");

const port=8080;

app.set("view engine","ejs");   //view engine means we are refering to renderning templates
// app/set("views",path.join(__dirname,"/views"));
//render means sending a file : res.render

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

// app.get("/ig/:username",(req,res)=>{
//     const followers =["Adam","Bob","Steve"];
//     let {username}=req.params;
//     res.render("instagram.ejs",{username,followers});
// })

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json");
    const data=instadata[username];
    if(data){
    res.render("instagram.ejs",{data});

    }
    else{
        res.render("error.ejs");
    }
})

app.get("/hello",(req,res)=>{
    res.send("hello");
})

app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});




