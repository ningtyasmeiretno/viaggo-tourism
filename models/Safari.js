const mongoose = require("mongoose")
const schema = mongoose.Schema({
title: String,
content: String,
url_img: String,
})
module.exports = mongoose.model("Safari", schema)