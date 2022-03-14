const express = require("express")
const bodyParse = require("body-parser")
const cors = require('cors')
const mongoose = require("mongoose")
const questionRoute = require("./questionRoute")
require("dotenv/config")

const app = express()

// middleware
app.use(cors())
app.use(bodyParse.json())

// port
app.listen(4000, ()=>console.log("Server is running now!"))

// connect Database
mongoose.connect(process.env.MONGDB_URL, ()=>console.log("Database is connected!"))

// set routes
app.use('/', questionRoute)