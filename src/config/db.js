const mongoose = require('mongoose')

const db = (connectionURL) => {
    return mongoose.connect(connectionURL)
}

module.exports = db;