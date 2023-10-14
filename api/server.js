import { getProducts, getProductById, getProductsByName, getProductsByCategory, getDiscount, getDiscountedProducts, getCollection, getCollectionProducts, getOrderProductsByOrderId, getDiscounts, addProduct, updateProduct } from '../database/database.js'
import express from "express"
import { calculateDiscount } from './calculation.js'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hi"
    })
})

//Calculates a every products discounted price
//QueryParams: none
app.get('/products', async (req, res) => {
    try {
        const products = await getProducts()
        let l = []
        for (let i = 0; i < products.length; i++) {
            products[i]['discountedPrice'] = calculateDiscount(products[i], await getDiscount(products[i].discount_id))
            l.push(products[i])
        }
        res.send(l)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

app.post('/products', async (req, res) => {
    const request = req.body
    const product = await addProduct(request.category, request.name, request.price, request.discount_id, request.attribute, request.image)
    product['discountedPrice'] = calculateDiscount(product, await getDiscount(product.discount_id))
    res.send(product)
})



//Calculates a certain products discounted price
//Params: id
app.get('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id
        const reqProduct = await getProductById(productId)
        reqProduct[0]['discountedPrice'] = calculateDiscount(reqProduct[0], await getDiscount(reqProduct[0].discount_id))
        res.send(reqProduct[0])
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

app.put('/products/:id', async (req, res) => {
    const id = req.params.id
    const { category, name, price, discount_id, image } = req.query
    const product = await getProductById(id).then((result) => {
        if (category) result[0].category = category;
        if (name) result[0].name = name;
        if (price) result[0].price = price;
        if (discount_id) result[0].discount_id = discount_id;
        if (image) result[0].image = image;
        return result[0]
    }).then(async (result) => {
        const query = await updateProduct(id, result.category, result.name, result.price, result.discount_id, result.image)
        return result
    })
    res.send(product)
})

app.get('/products/name/:name', async (req, res) => {
    try {
        const name = req.params.name
        const products = await getProductsByName(name)
        let l = []
        for (let i = 0; i < products.length; i++) {
            products[i]['discountedPrice'] = calculateDiscount(products[i], await getDiscount(products[i].discount_id))
            l.push(products[i])
        }
        res.send(l)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

app.get('/products/category/:category', async (req, res) => {
    try {
        const category = req.params.category
        const products = await getProductsByCategory(category)
        let l = []
        for (let i = 0; i < products.length; i++) {
            products[i]['discountedPrice'] = calculateDiscount(products[i], await getDiscount(products[i].discount_id))
            l.push(products[i])
        }
        res.send(l)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

app.get('/discounts', async (req, res) => {
    try {
        const discount = await getDiscounts()
        res.send(discount)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

app.get('/discounts/:id', async (req, res) => {
    try {
        const id = req.params.id
        const discount = await getDiscount(id)
        res.send(discount)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})



app.get('/sale', async (req, res) => {
    try {
        const products = await getDiscountedProducts()
        let l = []
        for (let i = 0; i < products.length; i++) {
            products[i]['discountedPrice'] = calculateDiscount(products[i], await getDiscount(products[i].discount_id))
            l.push(products[i])
        }
        res.send(l)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

app.get('/collection', async (req, res) => {
    try {
        const id = req.query.id
        const collection = await getCollection(id)
        res.send(collection);
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

app.get('/collection/:id', async (req, res) => {
    try {
        const id = req.params.id
        const products = await getCollectionProducts(id)
        let l = []
        for (let i = 0; i < products.length; i++) {
            products[i]['discountedPrice'] = calculateDiscount(products[i], await getDiscount(products[i].discount_id))
            l.push(products[i])
        }
        res.send(l)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }
})

app.get('/order/:id', async (req, res) => {
    try {
        const id = req.params.id
        const products = await getOrderProductsByOrderId(id)
        let l = []
        for (let i = 0; i < products.length; i++) {
            products[i]['discountedPrice'] = calculateDiscount(products[i], await getDiscount(products[i].discount_id))
            l.push(products[i])
        }
        res.send(l)
    } catch (err) {
        res.status(500).send(`Internal Server Error: ${err}`)
    }

})



app.listen(9090)