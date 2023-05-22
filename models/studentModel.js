const mongoose = require('mongoose')
var bcrypt = require('bcryptjs');

const studentModel = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:[true,"Email is required"],
        match:[
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            "please fill a valid email address"
        ]
    },
    password:{
        type:String,
        select:false,
        required:[true,"password is required"],
        maxLength:[
            15,
            'Password should not exceed more then 15 charactor'
        ],
        minLength:[
            6,
            'Password should atleast 6 charactor'
        ],
       
    }
},{timestamps:true})

studentModel.pre('save',function(){

    if(!this.isModified('password')){
        return
    }

    var salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
})

studentModel.methods.comparepassword =function(password){
    return bcrypt.compareSync(password,this.password)
}

let Student = mongoose.model("student",studentModel)

module.exports = Student
