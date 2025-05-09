import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect("mongodb+srv://22235103193:khorshedsadhin@cluster0.kfczkzu.mongodb.net/", {
    dbName:"NodeJs Mastery Course"
}).then(()=>console.log("MongoDB Connected...!")).catch((err)=>console.log(err));

const port = 3000;
app.listen(port, ()=>console.log(`Server is running on port ${port}`));
