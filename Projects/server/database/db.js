
import mongoose from 'mongoose';

const Connection = async (username,password) => {

    
    
    const URL = `mongodb+srv://${username}:${password}@tw5database.h8eskd7.mongodb.net/Relationship_Management_Department?retryWrites=true&w=majority`;
    try{
       await  mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser:true});
       console.log('Database Connected Succesfully');

    }catch (error){
        console.log('Error while connecting to database',error);
    }

}
export default Connection;