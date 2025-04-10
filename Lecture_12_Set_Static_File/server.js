import express from 'express';
import path from 'path';

const app = express();

let staticFolder = path.join(path.resolve(), 'public');
app.use(express.static(staticFolder));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
