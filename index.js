// Require HTTP and file system modules
let http = require('http');
let fs = require('fs');

// Create HTTP server
http.createServer((request, response) => {
    if(request.url == '/') {
        fs.readFile('index.html', function(error, data) {
            if(error) throw error;
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data);
            return response.end;
        });
    }
    else if(request.url == '/about') {
        fs.readFile('about.html', function(error, data) {
            if(error) throw error;
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data);
            return response.end;
        });
    } else if(request.url == '/contact-me') {
        fs.readFile('contact-me.html', function(error, data) {
            if(error) throw error;
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data);
            return response.end;
        });
    } else {
        fs.readFile('404.html', function(error, data) {
            if(error) throw error;
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data);
            return response.end;
        });
    }
}).listen(3000, () => {
    console.log("Listening on port 3000");
});