const http = require("http")
const PORT = 9090

const server = http.createServer(async (req, res) => {

    // ** Catch get method with root url
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {"Content-Type": "application/json"})
        res.write(JSON.stringify({message: "Hello world"}))
        res.end()
        return
    }
})

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})