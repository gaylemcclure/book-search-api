const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://gaylekdennison:oAHQ9KUTcA17hJBj@cluster0.k4rv7ti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/google-books");
module.exports = mongoose.connection;
