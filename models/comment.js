const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text:{
        type: String,
        required: true
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
})

module.exports = commentSchema