import app from './server'
const PORT = 9090

app.listen(PORT, 'localhost', () => {
    console.log(`Server listening ${PORT}`)
})