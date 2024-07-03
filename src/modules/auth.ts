import jwt from 'jsonwebtoken'
import bycript from 'bcrypt'
const UNAUTH_MSG = 'Not authorized'

export const createJWT = (user) => {
    const token = jwt.sign({id: user.UserId, username: user.Username}, process.env.JWT_SECRET)
    return token
}

export const protect = (req, res, next) => {

    if (req.originalUrl === '/api/signin') {
        next()
        return
    }

    const bearer = req.headers.authorization

    const unauth_res = {
        message: UNAUTH_MSG
    }
    if (!bearer) {
        res.status(401)
        res.json(unauth_res)
        return
    }

    const [, token] = bearer.split(" ")
    if (!token) {
        res.status(401)
        res.json(unauth_res)
        return
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.user = payload
        next()

    } catch (e) {
        res.status(401)
        res.json({cause: e})
    }
}

// ** Password compare and hasing
export const comparePassword = (plainTextPassword, hashedPassword) => bycript.compare(plainTextPassword, hashedPassword)

export const hashPassword = (plainTextPassword) => bycript.hash(plainTextPassword, process.env.SALT_ROUND)
