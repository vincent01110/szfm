import { getProducts, getProductById, getProductsByName, getProductsByCategory, getDiscount, getDiscountedProducts, getCollection, getCollectionProducts, getOrderProductsByOrderId, getDiscounts, addProduct, updateProduct, addUser, canSignIn, changePassword, updateContact, getUserbyId, getUserbyEmail, isAdmin, deleteProduct, getCollections, getAllCollectionProducts } from './database.mjs'
import express from "express"
import { calculateDiscount, hashPassword, isPwCorrect } from './calculation.mjs'
import { writeToLogFile } from './logger.mjs'
import jsonwebtoken from 'jsonwebtoken'
import cors from "cors"


const app = express()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))


app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hi"
    })
})

/**
 * Calculates a every products discounted price
 */
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
        writeToLogFile(`/products -> Error: ${err}`);
        res.status(500).send('Internal Server Error');
    }
})

/**
 * 
 */
app.post('/products', async (req, res) => {
    const request = req.body
    const product = await addProduct(request.category, request.name, request.price, request.discount_id, request.attribute, request.image)
    product['discountedPrice'] = calculateDiscount(product, await getDiscount(product.discount_id))
    res.status(201).send(product)
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
        writeToLogFile(`/products/:id -> Error: ${err}`);
        res.status(500).send('Internal Server Error');
    }
})

app.put('/products/:id', async (req, res) => {
    const id = req.params.id
    const { category, name, price, discount_id, image } = req.body
    const product = await getProductById(id).then((result) => {
        if (category) result[0].category = category;
        if (name) result[0].name = name;
        if (price) result[0].price = price;
        if (discount_id !== undefined) result[0].discount_id = discount_id;
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
        writeToLogFile(`/products/name/:name -> Error: ${err}`);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/products/category/:category', async (req, res) => {
    try {
        let limit = 0;
        if (req.query.limit) limit = +req.query.limit;

        const category = req.params.category
        const products = await getProductsByCategory(category, limit)
        let l = []
        for (let i = 0; i < products.length; i++) {
            products[i]['discountedPrice'] = calculateDiscount(products[i], await getDiscount(products[i].discount_id))
            l.push(products[i])
        }
        res.send(l)

    } catch (err) {
        writeToLogFile(`/products/category/:category -> Error fetching: ${err}`);
        res.status(500).send('Internal Server Error');
    }
})

app.delete('/products/:id', async (req, res) => {
    try {
        const id = req.params.id
        const response = await deleteProduct(id)
        res.send(response)
    } catch (err) {
        res.status(500).send(err)
    }

})

app.get('/discounts', async (req, res) => {
    try {
        const discount = await getDiscounts()
        res.send(discount)
    } catch (err) {
        writeToLogFile(`/discounts -> Error fetching: ${err}`);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/discounts/:id', async (req, res) => {
    try {
        const id = req.params.id
        const discount = await getDiscount(id)
        res.send(discount)
    } catch (err) {
        writeToLogFile(`/discounts/:id -> Error fetching: ${err}`);
        res.status(500).send('Internal Server Error');
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
        writeToLogFile(`/sale -> Error: ${err}`);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/collection', async (req, res) => {
    try {
        const collections = await getAllCollectionProducts()
        res.send(collections);
    } catch (err) {
        writeToLogFile(`/collection -> Error: ${err}`);
        res.status(500).send('Internal Server Error');
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
        writeToLogFile(`/collection/:id -> Error: ${err}`);
        res.status(500).send('Internal Server Error');
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
        writeToLogFile(`/order/:id -> Error: ${err}`);
        res.status(500).send('Internal Server Error');
    }

})


app.post('/user/signup', async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body
        const hash = await hashPassword(password)
        await addUser(email, hash, firstName, lastName)
        res.status(201).send(`${email} signed up!`)
    } catch (error) {
        writeToLogFile(`/signup -> Error: ${error}`);
        res.status(500).send('Internal Server Error');
    }
})

app.post('/user/signin', async (req, res) => {
    try {
        const { email, password } = req.body
        const hash = await canSignIn(email)
        const answ = await isPwCorrect(password, hash)
        const jwtToken = jsonwebtoken.sign({ email: email }, "SUPER_SECRET_KEY")
        if (answ) {
            res.json({ email: email, token: jwtToken })
        } else {
            res.status(400).send("Error")
        }
    } catch (error) {
        writeToLogFile(`/signin -> Error: ${error}`);
        res.status(500).send('Internal Server Error');
    }
})

app.put('/user/password', async (req, res) => {
    try {
        //get email from currently signed in user!!!!!!
        const { email, password } = req.body
        const hash = await hashPassword(password)
        const result = await changePassword(email, hash)
        res.send(result)
    } catch (error) {
        writeToLogFile(`/user/password -> Error: ${error}`);
        res.status(500).send('Internal Server Error');
    }
})

app.put('/user/contact', async (req, res) => {
    try {
        const { email, zipCode, city, address, phoneNumber } = req.body
        const result = await updateContact(email, zipCode, city, address, phoneNumber)
        res.send(result)
    } catch (error) {
        writeToLogFile(`/user/contact -> Error: ${error}`);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await getUserbyId(id)
        res.send(user)
    } catch (error) {
        writeToLogFile(`/user/:id -> Error: ${error}`);
        res.status(500).send('Internal Server Error');
    }
})

app.get('/user', async (req, res) => {
    try {
        const { email } = req.body
        const user = await getUserbyEmail(email)
        res.send(user)
    } catch (error) {
        writeToLogFile(`/user -> Error: ${error}`);
        res.status(500).send('Internal Server Error');
    }
})


app.post('/user/admin', async (req, res) => {
    const email = req.body
    const answ = await isAdmin(email.email)
    if (answ) {
        res.status(200).send(answ)
    } else {
        res.status(400).send(answ)
    }
})

app.post('/user/admin/signin', async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const hash = await canSignIn(email)
        if (!(hash === undefined)) {
            const answ = await isPwCorrect(password, hash.password)
            const admin = await isAdmin(email)
            if (admin.isAdmin == 1 && hash.password && answ) {
                const jwtToken = jsonwebtoken.sign({ email: email }, "SUPER_SECRET_KEY")
                res.json({ email: email, token: jwtToken })
            } else {
                res.status(401).send("Login credentials are not correct.")
            }
        } else {
            res.status(401).send("User not found")
        }

    } catch (error) {
        writeToLogFile(`/user/admin/signin -> Error: ${error}`);
        res.status(500).send("Internal server error-server: " + error)
    }
})




app.listen(9090)