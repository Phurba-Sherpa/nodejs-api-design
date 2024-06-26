import app from './server'
import * as dotenv from "dotenv";
dotenv.config();

const PORT = 9090

app.listen(PORT, 'localhost', () => {
    console.log(`Server listening ${PORT}`)
})