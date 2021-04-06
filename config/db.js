const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        
module.exports = connectDB
await mongoose.connect(db,{
    useUnifiedTopology: true,
    useNewUrlParser: true ,
    useCreateIndex: true});

        console.log("MongoDB connected ...");

    } catch (error) {
        console.log(error.message);
        //Exit process with failure
        process.exit(1);
    }
}


module.exports = connectDB