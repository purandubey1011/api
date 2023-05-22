const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors")

exports.homepage = catchAsyncErrors((req,res,next)=>{
        res.json({message:"homepage"})
})

