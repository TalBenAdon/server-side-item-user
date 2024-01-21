const mongoose = require('mongoose')
const MONGO_URL = 'mongodb+srv://test:1234@cluster0.onb7tvx.mongodb.net/talbenadon?retryWrites=true&w=majority'
function connect() {
    try {
        mongoose.connect(MONGO_URL)
            .then(() => { console.log("DB-Connection Success") })
    } catch (error) {
        console.log("MongoDB Error:", error);
    }

}

module.exports = { connect }

// connect()