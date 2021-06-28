import mongoose from 'mongoose';
const SubjectSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    amount:{
        type: Number,
        required: true,
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'courses'
    }]

});

const Subjects = mongoose.model('subjects',SubjectSchema );
export default Subjects;
