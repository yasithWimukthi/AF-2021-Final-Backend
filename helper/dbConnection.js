const mongoose = require('mongoose');

/**
 * Connect to MongoDB
 */
const dbConnect = () => {
    mongoose.connect(process.env.DB_CONNECTION, () => console.log('Connected to database'));
}

module.exports = {dbConnect};