const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presentSchema = new Schema ({
    name: {
        type: String,
    },
    image: String,
    price: Number,
    recipient: String,
    description: {
        type: String,
    }
})

const Present = mongoose.model('Present', presentSchema);
module.exports = Present;