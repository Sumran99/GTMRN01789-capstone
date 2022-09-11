const mongoose = require("mongoose");
const connectDatabase = () => {
    mongoose
      .connect(`mongodb+srv://bootcamp:bootcamp@cluster0.aswf8k6.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((data) => {
        console.log(`Mongodb connected with server: ${data.connection.host}`);
      }).catch((error)=>{
        console.log(`Database connection error ==> ${error}`); 
      })
  };
  
  module.exports = connectDatabase;