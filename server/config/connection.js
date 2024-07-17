require("dotenv").config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://aliyusunderwood:Aliyus77*@cluster0.4dxthcp.mongodb.net/');

module.exports = mongoose.connection;
