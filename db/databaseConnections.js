const mongoose = require('mongoose');

const connectToDB = () => {
    return mongoose.connect(process.env.MONGODB_URL);
}

module.exports = connectToDB;