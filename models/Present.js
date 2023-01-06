const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const presentSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'add a name']
    },
    image: String,
    price: {
        type: Number,
        min: 0
    },
    recipient: {
        type: String,
        required: true
    },
    description: String
})

const Present = mongoose.model('Present', presentSchema);
module.exports = Present;