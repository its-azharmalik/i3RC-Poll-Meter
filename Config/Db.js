const mongoose = require('mongoose');

const username = "Bizer44";
const password = "sexyboltenabhai";
const cluster = "cluster0.rzwrw";
const dbname = "i3rc";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Database Connected successfully");
}); 

module.exports = db;