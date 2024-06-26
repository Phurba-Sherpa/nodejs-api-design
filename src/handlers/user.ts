import prisma from '../db'
import { comparePassword, createJWT, hashPassword } from '../modules/auth'

export const createUser = async(req, res) => {
    const hashedPassword = hashPassword(req.body.password)
    
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

export const signIn = (req, res) => {
    const plainTextPassword = req.body.password
    const username = req.body.username
    prisma.user.findUniqueOrThrow({select: {Username: username}})
    comparePassword(plainTextPassword, )
}