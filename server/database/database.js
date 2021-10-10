const mongoose = require('mongoose');
// const config = require('../../config');

const Connect = async () => {
    try {
        // Mongodb connection
        const con = await mongoose.connect("mongodb+srv://dhruv:dhruv@uploader.9dvp6.mongodb.net/Uploader?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB Connected : ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = Connect