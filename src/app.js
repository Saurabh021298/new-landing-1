const express = require("express");
const path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express()
require("./db/conn")
const Register =require("./models/registers")
const port = process.env.PORT || 3000;
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

var emaill="";
app.get("/", (req, res) =>{
    res.render("index");
})

app.post("/signup", async(req,res) =>{
     emaill = req.body.email;
    try{

        
      const registeruser = new Register({
          Name : req.body.name,
          Email : req.body.email,
          Phone : req.body.phone,
          City : req.body.city
      })
      const userexist = await Register.findOne({Email:emaill});
     if(userexist){
         res.status(422).redirect("responseFail.html");
     }
     else{
       
    const registered = await  registeruser.save();
     res.status(201).redirect("responseSuccess.html");
     }
    } catch(err){
    
        res.send("error--"+err)
    }
    })

app.listen(port, () =>{
    console.log('server is running...');
})