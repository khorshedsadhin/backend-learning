import express from 'express';

const app = express();

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`server is listening on port ${port}`);
});
