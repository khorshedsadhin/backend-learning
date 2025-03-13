import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("you requested for home route");
});
app.get('/srk', (req,res) => {
    res.send("here is some info about srk");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
