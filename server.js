import express from 'express';
import mongoose from'mongoose';
import nodemon from 'nodemon';
import dotenv from'dotenv';
import cors from'cors';
import bodyParser from'body-parser';
import Subjects from './Routes/subjects.js'
import Course from './Routes/courses.js'


const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://Imdaadh:vH4dvC1Sa8i5LzG7@cluster0.w8oq4.mongodb.net/AF2018DATABASE?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology:true ,useCreateIndex:true}).
then(() => app.listen(PORT,() => console.log(`connection stablished successfully on port: ${PORT}`))).
catch((err) => console.log(err.message));

app.use('/subject',Subjects);
app.use('/course',Course);

