const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors")
const Student = require("../models/studentModel")
const ErrorHandler = require("../utils/ErrorHandler")


exports.studentsignup=catchAsyncErrors(async(req,res,next)=>{
    // res.json({message:"signup page"})
    let students = await new Student(req.body).save()
    res.status(201).json(students)
})
exports.studentsignin=catchAsyncErrors(async(req,res,next)=>{
    let student = await Student.findOne({email:req.body.email}).select('+password').exec()

    if(!student){
        return next(new ErrorHandler('student not found with this email address'))
    }
    
    let isMatch = student.comparepassword(req.body.password)

    if(!isMatch){
        return next(new ErrorHandler('Wrong credientials',500))
    }

    res.json(student)
})
exports.studentsignout=catchAsyncErrors(async(req,res,next)=>{
   
})
