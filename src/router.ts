import { Router } from 'express'
import { body } from 'express-validator'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from './handlers/product'
import { createUpdate } from './handlers/product-update'
import {
    handleInputErrors,
    checkProductExists,
    checkUserExists
} from './modules/middleware'

const router = Router()
const chainStringValidation = (property) => body(property).trim().notEmpty()
/* ===============
    PRODUCT
=============== */

router.get('/products', getProducts)

router.get('/products/:id', getProductById)

router.post(
    '/products',
    chainStringValidation('name'),
    handleInputErrors,
    createProduct
)

router.put(
    '/products/:id',

    chainStringValidation('name'),
    handleInputErrors,
    updateProduct
)

router.delete('/products/:id', deleteProduct)

/* ===============
    UPDATES
=============== */

router.get('/updates', (req, res) => {
    res.json({ message: 'Updates' })
})

router.get('/updates/:id', (req, res) => {})

router.post(
    '/updates',
    [
        chainStringValidation('body'),
        chainStringValidation('title'),
        chainStringValidation('postId').custom(checkProductExists)
    ],
    handleInputErrors,
    createUpdate
)

router.put('/updates/:id', [
    body('title').optional(),
    body('body').optional(),
    body('version').optional(),
    body('asset').optional(),
    body('status').isIn(['IN_PROGRESS', 'LIVE', 'DEPRECATED', 'ARCHIVED'])
])
router.delete('/updates/:id', (req, res) => {})

/* ===============
    UPDATE POINTS
=============== */

router.get('/updatepoints', (req, res) => {
    res.json({ message: 'Update point' })
})
router.get('/updatepoints/:id', (req, res) => {})
router.post(
    '/updatepoints',
    [
        chainStringValidation('name'),
        chainStringValidation('description'),
        body('updateId').exists().isString()
    ],
    (req, res) => {}
)
router.put('/updatepoints/:id', [
    body('name').optional().trim().notEmpty(),
    body('description').optional().trim().notEmpty()
])
router.delete('/updatepoints/:id', (req, res) => {})

export default router
