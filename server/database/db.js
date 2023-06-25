import mongoose from "mongoose";

const Connection = async(username,password) => {
    const  URL = `mongodb+srv://${username}:${password}@cluster0.dkeqirg.mongodb.net/blog`;
    // const URL = `mongodb://${username}:${password}@ac-abhdzvq-shard-00-00.dkeqirg.mongodb.net:27017,ac-abhdzvq-shard-00-01.dkeqirg.mongodb.net:27017,ac-abhdzvq-shard-00-02.dkeqirg.mongodb.net:27017/?ssl=true&replicaSet=atlas-n3vztd-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL,{useNewUrlParser : true});
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error While connecting database",error)
    }
}

export default Connection