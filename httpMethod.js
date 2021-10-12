const http = require('http');

const server = http.createServer(
    (req, res) => {
        console.log(req.method);
        res.write('Hello, there.');
        res.end();
    }
)

server.listen(5000);