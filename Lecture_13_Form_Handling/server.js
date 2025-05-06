import express from 'express';
import path from 'path';

const app = express();

let staticFolder = path.join(path.resolve(), 'public');
app.use(express.static(staticFolder));

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=> {
    res.render('index.ejs');
})

app.post('/form-submit', (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Your form has been submitted',
        success: true
    })
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
