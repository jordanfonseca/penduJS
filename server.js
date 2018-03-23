const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer( (request, response) => {
    console.log('New request ...')

    let filePath = './app' + request.url

    if (request.url == '/') {
        filePath += '/index.html'
    }

    let extname = path.extname(filePath)
    let contentType = 'text/html'
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break
        case '.svg':
            contentType = 'image/svg+xml'
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.png':
            contentType = 'image/png';
            break
        case '.jpg':
            contentType = 'image/jpg';
            break
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(500)
            response.end('Error : ' + error.code + ' ..\n')
            response.end()
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType })
            response.end(content, 'utf-8')
        }
    })

}).listen(8080)

console.log('Server running at http://127.0.0.1:8080');