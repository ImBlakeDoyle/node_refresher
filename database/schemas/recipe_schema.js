const { Schema } = require("mongoose");

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    cost: {
        type: String,
    },
    time: {
        type: Number,
        required: true,
    },
    comments: {
        type: Array,
    }
});

module.exports = RecipeSchema;