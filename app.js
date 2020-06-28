//importing modules
const express=require('express')
const mongoose=require('mongoose')
const url="mongodb://localhost/AliensDbEx"

//initializing express
const app=express()

//connecting application to database
mongoose.connect(url,{useNewUrlParser:true})
//handle connection with con//con is an connection obj
//this will return the hold of connection to con
const con=mongoose.connection

//notify if connected
//hre fun is a callback function
con.on('open',() => {
    console.log('Connected')
})
app.use(express.json())

const alienRouter=require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000,() => {
    console.log('Server Started')
})