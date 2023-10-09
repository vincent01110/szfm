import { getProducts, getProductById, getProductsByName } from '../database/database.js'
import express from "express"

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hi"
    })
})

app.get('/getProducts', async (req, res) => {
    const products = await getProducts()
    res.send(products)
})

app.get('/getProduct/:id', async (req, res, next) => {
    const id = req.params.id
    const products = await getProductById(id)
    res.send(products)
    next()
})

app.get('/getProductsByName', async (req, res, next) => {
    const name = req.query.name
    const products = await getProductsByName(name)
    res.send(products)
    next()
})


app.listen(9090)