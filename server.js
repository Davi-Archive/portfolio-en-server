const express = require('express');
const dotenv = require("dotenv").config({ path: "./.env" });
const colors = require('colors');
var cors = require("cors");

const connectDB = require('./config/db.js')

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
    res.status(200).json({msg: 'working!'})
})

app.use('/portfolio/en/about', require('./routes/aboutRoutes.js'))

const PORT = process.env.PORT || 3001;
connectDB()

app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`)
})