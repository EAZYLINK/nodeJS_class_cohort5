const http =  require('http')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({
            success: true,
            message: 'Welcome to http server!'
        }))
    }
})

server.listen(8000, () => {
    console.log('Server started on port 8000')
})