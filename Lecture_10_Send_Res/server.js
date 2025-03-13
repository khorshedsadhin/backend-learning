import express from 'express';
import path from 'path';

const app = express();

const products = [
    {title: 'iphone - 15', price: 80000},
    {title: 'iphone - 16', price: 96000},
    {title: 'Samsung S25', price: 90000}
]

// send response
app.get('/', (req, res) => {
    /*
    res.json({
        message : "fetched all products",
        products : products,
        success : true
    })
    */

    // res.send ("<h1>this is your request</h1>");

    const dir = path.resolve();
    const htmlFileLocation = path.join(dir, './index.html');
    res.sendFile(htmlFileLocation);

});

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`server is listening on port ${port}`);
});
