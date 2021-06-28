import express from 'express';
import Course from '../Model/courses.js';
const router = express.Router();

router.post('/Course', async(req,res)=>{

    const p = req.body;
    const newCourse = new Course(p);
    try {
        await newCourse.save();
        res.send({success:'true',message:"Successfully Inserted"});
    }catch (e) {
        console.log(e);
    }

})

router.get('/getCourse', async(req,res)=>{

    try{
        const allCourses = await Course.find({}).populate('subjects', 'name');
        res.json(allCourses);
    }catch(e){
        console.log(e)
    }
})

router.get('/getCourses', async(req,res)=>{

    try{
        const getCourse = await Course.find();
        res.json({getCourse:getCourse});
    }catch(e){
        console.log(e)
    }
})




router.get('/getSubjectById/:name', async (req,res) =>{
    const id=req.params.name;
    await Course.find({name:name}).populate('subjects', 'name amount')
        .then(data => {
            res.send({data:data,success:true});
        })
        .catch(error => {
            res.status(500).send({error:error,message});
        });
})


router.delete('/deleteCourse/:id', async (req,res)=>{

    const id = req.params.id;

    try{
        const course = await Course.findByIdAndDelete({_id:id});
        res.send({success: 'true', message: "Successfully Deleted"})

    }catch(e){
        console.log(e)
    }
})



export default router;