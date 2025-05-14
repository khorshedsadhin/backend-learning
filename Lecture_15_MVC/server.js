import express from 'express';
import mongoose from 'mongoose';
import {User} from './Models/User.js';

const app = express();
app.use(express.urlencoded({extended: true}));

mongoose.connect(
    "mongodb+srv://22235103193:khorshedsadhin@cluster0.kfczkzu.mongodb.net/",
    {
        dbName: "NodeJs_Mastery_Course",
    }
).then(() => console.log("MongoDb connected...")).catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/form-submit', async (req, res) => {
    // console.log("getting the data from body", req.body)

    try {
        let user = await User.create(req.body);
        res.json({message: "User created successfully",newUser:user, success: true,})
    } catch (error) {
        res.json({message: error.message})
    }
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
