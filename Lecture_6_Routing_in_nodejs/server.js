import http from 'http';

const server = http.createServer((req,res) => {
    // console.log(req.url);
    // res.end('<h1>Your request has been accepted</h1>');

    if(req.url === '/wdm')
        res.end("welcome to the webdev mastery");
    else if(req.url === '/srk')
        res.end("we are not able to show anything about srk");
    else
        res.end("invalid request");
});

const port = 3000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
