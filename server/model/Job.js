const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    specialization: {
        type:String,
        required:true
    },
    tags:{
        type:Array,
        required:true
    },
    isFavorite:Boolean,
    date:Date
})


const Job = mongoose.model('Job',jobSchema)

module.exports = Job;