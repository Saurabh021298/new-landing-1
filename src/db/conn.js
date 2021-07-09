const mongoose = require("mongoose");
const dB = 'mongodb+srv://proggrowth:proggrowth@123@cluster0.uop0m.mongodb.net/landingpagereg?retryWrites=true&w=majority'



mongoose.connect(dB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>console.log('no connection'));