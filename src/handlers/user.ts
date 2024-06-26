import prisma from '../db'
import { comparePassword, createJWT, hashPassword } from '../modules/auth'
const AUTH_FAIL_MSG = 'Invalid username or password'

export const createUser = async(req, res) => {
    const hashedPassword = await hashPassword(req.body.password)
    
    const createdUser = await prisma.user.create({
       data: {
        Username: req.body.username,
        Password: hashedPassword
       }
    })

    // const token = createJWT(createdUser)

    res.status(201)
    res.json({message: 'User creation successful'})
}

export const signIn = async (req, res) => {
    const plainTextPassword = req.body.password
    const username = req.body.username
    try {
    const user = await prisma.user.findUniqueOrThrow({where: {
        Username: username
    }})

    const isValid = await comparePassword(plainTextPassword, user.Password)
    if (!isValid) {
        res.status(401)
        res.json({message: AUTH_FAIL_MSG})
        return
    }

    const token = await createJWT(user)
    res.status(200)
    res.json({accessToken: token})

    } catch(error) {
        res.status(401)
        res.json({message: AUTH_FAIL_MSG})
    }
}