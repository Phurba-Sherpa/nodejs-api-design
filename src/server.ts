import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createUser, signIn } from './handlers/user'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({exrended: true}))
app.use('/api', protect, router)

app.post("/signup", createUser);
app.post("/signin", signIn);

export default app