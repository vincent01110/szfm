import { getProducts, getProductById, getProductsByName, getProductsByCategory, getDiscount, getDiscountedProducts, getCollection, getCollectionProducts, getOrderProductsByOrderId } from '../database/database.js'
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

app.get('/getProduct/:id', async (req, res) => {
    const id = req.params.id
    const products = await getProductById(id)
    res.send(products)
})

app.get('/getProductsByName', async (req, res) => {
    const name = req.query.name
    const products = await getProductsByName(name)
    res.send(products)
})

app.get('/getProductsByCategory', async (req, res) => {
    const category = req.query.category
    const products = await getProductsByCategory(category)
    res.send(products)
})

app.get('/getDiscountById', async (req, res) => {
    const id = req.query.id
    const discount = await getDiscount(id)
    res.send(discount)
})

//Calculates a every products discounted price
//QueryParams: none
app.get('/getDiscountedPrices', async (req, res) => {
    const products = await getProducts()
    let l = []
    for(let i = 0; i < products.length; i++){
        if(products[i].discount_id != null){
            const discount = await getDiscount(products[i].discount_id)
            const x = Math.floor((products[i].price * (1 - (discount[0].percentage /100))))
            l.push({id: products[i].id, price: products[i].price, discountedPrice: x })
        } else {
            l.push({id: products[i].id, price: products[i].price})
        }
    }
    res.send(l)
})

//Calculates a certain products discounted price
//QueryParams: id
app.get('/getProductWithDiscount', async (req, res) => {
    const productId = req.query.id
    const reqProduct = await getProductById(productId)
    if(reqProduct[0].discount_id){
        const discount = await getDiscount(reqProduct[0].discount_id)
        const discountedPrice =  Math.floor((reqProduct[0].price * (1 - (discount[0].percentage /100))))
        reqProduct[0]['discountedPrice'] = discountedPrice
    }
    res.send(reqProduct[0])
})

app.get('/getDiscountedProducts', async (req, res) => {
    const products = await getDiscountedProducts()
    console.log(products)
    res.send(products);
})

app.get('/getCollection', async (req, res) => {
    const id = req.query.id
    const collection = await getCollection(id)
    res.send(collection);
})

app.get('/getCollectionProducts', async (req, res) => {
    const id = req.query.id
    const products = await getCollectionProducts(id)
    res.send(products);
})

app.get('/getOrderProductsByOrderId', async (req, res) => {
    const id = req.query.id
    const products = await getOrderProductsByOrderId(id)
    res.send(products);
})



app.listen(9090)