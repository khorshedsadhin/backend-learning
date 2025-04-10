import express from 'express';

const app = express();

let product = [
    {title: 'Iphone - 16', price: 120000},
    {title: 'Galaxy S25', price: 79000},
    {title: 'Google Pixel', price: 55000},
]

app.get('/', (req, res) => {
    let name = "Khorshed Sadhin";
    res.render('index.ejs', {name, product});
})

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`server is listening on port ${port}`);
});
