const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({

    Name : {

        type:String,
        required:true,
        
    },
    Email : {
        type:String,
        required:true,
        unique:true
    },
    Phone : {
        type:String,
        required:true
    
    },
    City : {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Registers", employeeSchema)
module.exports = Register;