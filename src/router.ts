import {Router} from 'express'

const router = Router()

/* ===============
    PRODUCT
=============== */

router.get('/products', (req, res) => {
    res.json({message: "Product"})
})
router.get('/products/:id', (req, res) => {})
router.post('/products', (req, res) => {})
router.put('/products/:id', (req, res) => {})
router.delete('/products/:id', (req, res) => {})

/* ===============
    UPDATES
=============== */
router.get('/updates', (req, res) => {
    res.json({message: "Updates"})
})
router.get('/updates/:id', (req, res) => {})
router.post('/updates', (req, res) => {})
router.put('/updates/:id', (req, res) => {})
router.delete('/updates/:id', (req, res) => {})

/* ===============
    UPDATE POINTS
=============== */

router.get('/updatepoints', (req, res) => {
    res.json({message: "Update point"})
})
router.get('/updatepoints/:id', (req, res) => {})
router.post('/updatepoints', (req, res) => {})
router.put('/updatepoints/:id', (req, res) => {})
router.delete('/updatepoints/:id', (req, res) => {})

export default router