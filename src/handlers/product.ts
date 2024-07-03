import { validationResult } from 'express-validator'
import prisma from '../db'

export const createProduct = async (req, res) => {
    // Check for user id
    try {
        const newProduct = await prisma.product.create({
            data: {
                Name: req.body.name,
                UserId: req.user.id
            }
        })

        res.status(201)
        res.json(newProduct)
    } catch (error) {
        console.error(error)
        res.status(400)
        res.json({ errors: error })
    }
}

export const updateProduct = async (req, res) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty()) {
        res.status(400)
        res.json({errors: errors.array()})
    }
}


