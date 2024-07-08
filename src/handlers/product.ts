import { validationResult } from 'express-validator'
import prisma from '../db'

export const getProducts = async (req, res) => {
    try {
        const userId = req.user.id
        const user = await prisma.user.findUnique({
            where: {
                UserId: userId
            },
            include: {
                Products: true
            }
        })
        console.log(user, 'user')
        res.status(200)
        res.json({ data: user.Products })
    } catch (error) {
        console.error(error)
        res.status(400)
        res.json({ errors: error })
    }
}

export const getProductById = async (req, res) => {
    const productId = req.params.id

    const products = prisma.product.findFirst({
        where: {
            UserId: req.user.id,
            ProductId: productId
        }
    })

    res.status(200)
    res.json({ data: products })
}
export const createProduct = async (req, res) => {
    // Check for user id
    // try {
    const newProduct = await prisma.product.create({
        data: {
            Name: req.body.name,
            UserId: req.user.id
        }
    })

    res.status(201)
    res.json({ data: newProduct })
    // } catch (error) {
    //     console.error(error)
    //     res.status(400)
    //     res.json({ errors: error })
    // }
}

export const updateProduct = async (req, res) => {
    const updatedProd = await prisma.product.update({
        where: {
            ProductId: req.params.id
        },
        data: {
            Name: req.body.name
        }
    })
    res.json({ data: updatedProd })
}

export const deleteProduct = async (req, res) => {
    const deletedProd = await prisma.product.delete({
        where: {
            UserId: req.user.id,
            ProductId: req.params.id
        }
    })

    res.json({ data: deletedProd })
}
