const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "Price must be Required"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        required: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: ["apple","Samsung","dell","mi"],
            message: `{VALUES} is not Supported`,
        },
    },

});

module.exports = mongoose.model('Product', productSchema);