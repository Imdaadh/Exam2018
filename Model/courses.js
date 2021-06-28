import mongoose from 'mongoose';
const CourseSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    code:{
        type: String,
        required: true,
    },
    passmark:{
        type: String,
        required: true,
    },
    lecturer_in_Charge:{
        type: String,
        required: true,
    },
    subjects:[{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'subjects'
    }]

});

const Course = mongoose.model('courses',CourseSchema );
export default Course;
