const mongoose = require("mongoose")
const schema = mongoose.Schema({
title: String,
url_img: String,
})
module.exports = mongoose.model("Slide", schema)