import express from 'express';
import Course from '../Model/courses.js';
import Subjects from '../Model/subjects.js';
const router = express.Router();

router.post('/Subject', async(req,res)=>{

    const p = req.body;
    const newSubject = new Subjects(p);
    try {
        await newSubject.save();
        res.send({success:'true',message:"Successfully Inserted"});
    }catch (e) {
        console.log(e);
    }

})

router.get('/getSubjects', async(req,res)=>{

    try{
        const getSubjects = await Subjects.find();
        res.json(getSubjects);
    }catch(e){
        console.log(e)
    }
})

router.get('/getSubject', async(req,res)=>{

    try{
        const getSubject = await Subjects.find();
        res.json({getSubjects:getSubject});
    }catch(e){
        console.log(e)
    }
})

router.delete('/deleteSubjectsBy/:id', async (req,res)=>{

    const id = req.params.id;

    try{
        const subject = await Subjects.findByIdAndDelete({_id:id});
        res.send({success: 'true', message: "Successfully Deleted"})

    }catch(e){
        console.log(e)
    }
})


router.put('/SubjectUpdate/:id',async(req,res)=>{

    const id = req.params.id;
    const s = req.body;
    
    try {
        await Subjects.findByIdAndUpdate({_id: id},{"name": s.name, "description":s.description, "amount":s.amount})
        res.send({success: 'true', message: "Successfully Updated"})
    }catch (e){
        console.log(e)
    }

 })


export default router;