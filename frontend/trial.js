const http = require('http')
var url = require('url');
var fs = require('fs');
var path = require('path');

const hostname = '192.168.51.84'
const port = 8000

const server = http.createServer( function(req,res) {
    if (req.url === '/') {
        fs.readFile('/home/ubuntu/fullstack/frontend/src/App.js', function(err, data) {
            if (err){
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'javascript' });
            res.write(data); 
            res.end();
            return;
        });
    } else if (req.url === '/login.js') {
        fs.readFile('', function (err, data) {
            if (err) { throw err; }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
            return;
        });
    }
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})