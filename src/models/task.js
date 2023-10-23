const mongoose=require('mongoose')
const taskSchema=mongoose.Schema({
    name:{type: String, required: true},
    done:{type: Boolean,default: false,  required: true},
    checklist:{
        type:mongoose.Schema.Types.ObjectId,
        Ref:'checklist', required: true
    }
})

module.exports=mongoose.model('task',taskSchema);