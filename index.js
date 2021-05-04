const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")
const path = require('path');

mongoose
.connect("mongodb://localhost:27017/rest-api-uts", { useNewUrlParser: true })    
//.connect("mongodb+srv://cclime:cclimeFE@cluster0.sya4d.mongodb.net/rest-api-uts?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
        const app = express()
        app.use(express.json()) // new
        app.use("/uts", routes)
        app.use(express.static(path.join(__dirname, 'public')));


        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })