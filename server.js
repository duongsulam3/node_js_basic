const http = require('http');

const myPort = 6868;

const server = http.createServer((req, res)=> {
    console.log('run request ....')
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello world</h1>');
    res.end();
})

server.listen(myPort, 'localhost', ()=> {
    console.log('NodeJS server is running on port: ' + myPort);
})