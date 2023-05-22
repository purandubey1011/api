require('dotenv').config({path:'./.env'})
const express = require('express')
const app = express()

// database connection
require('./models/database').connectDatabase()

// middle ware
const logger = require('morgan')
app.use(logger('tiny'))

// body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes / routes ko hmehsa app.use() me likhte hain na ki get and post me
app.use("/",require('./routes/indexRoutes'))
app.use("/student",require('./routes/studentRoutes'))

// error handling
const ErrorHandler = require('./utils/ErrorHandler')
const { generatedErrors } = require('./middlewares/errors')

app.all('*',(req,res,next)=>{
   next(new ErrorHandler(`Requested URL Not Found ${req.url}`,404)) 
})
app.use(generatedErrors)

app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${process.env.PORT}`)
})