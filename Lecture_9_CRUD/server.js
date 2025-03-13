import express from 'express';

const app = express();
const port = 3000;

// c = create => post
// r = read => get
// u = update => put
// d = delete => delete

app.post('/', (req, res) => {

});
app.get('/', (req, res) => {
    res.send("you requested for the home page");
});
app.put('/', (req, res) => {

});
app.delete('/', (req, res) => {

});

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
