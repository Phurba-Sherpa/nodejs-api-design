import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200)
    res.json({greet: "Hello world!"})
})

export default app