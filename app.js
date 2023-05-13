require('dotenv').config({path:'./.env'})
const express = require('express')
const app = express()

// middle ware
const logger = require('morgan')
app.use(logger('tiny'))

app.get("/",require('./routes/indexRoutes'))

app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${process.env.PORT}`)
})