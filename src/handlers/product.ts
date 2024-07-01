import { validationResult } from 'express-validator'
import prisma from '../db'

export const createProduct = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        res.status(400)
        res.json({ errors: errors.array() })
        return
    }

    // Check for user id
    try {
        await prisma.user.findUniqueOrThrow({
            where: {
                UserId: req.body.userId
            }
        })

        const newProduct = await prisma.product.create({
            data: {
                Name: req.body.name,
                UserId: req.body.userId
            }
        })

        res.status(201)
        res.json(newProduct)
    } catch (error) {
        res.status(400)
        res.json({ errors: error })
    }
}
