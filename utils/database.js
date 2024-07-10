const mongoose = require("mongoose")
const connectDB = async() => {
    try{
       await mongoose.connect("mongodb+srv://manamana4211:manamikato0211@cluster0.vzonppa.mongodb.net/appDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch(err){
        console.log("Failure: Unconnected to MongoDB")
                throw new Error()
    }
}
module.exports = connectDB