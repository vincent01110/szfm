import mysql from 'mysql2'


const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'webshop'
}).promise()


export async function getProducts() {
    const result = await pool.query("SELECT * FROM product");
    return result[0]
}

export async function getProductById(id) {
    const result = await pool.query(`SELECT * FROM product WHERE product.id = ?`, [id]);
    return result[0]
}

export async function getProductsByName(name) {
    const formatedName = '%' + name + '%';
    const result = await pool.query(`SELECT * FROM product WHERE product.name LIKE ?`, [formatedName]);
    return result[0]
}

export async function getProductsByCategory(category) {
    const result = await pool.query(`SELECT * FROM product WHERE product.category LIKE ?`, [category]);
    return result[0]
}

export async function getDiscounts() {
    const result = await pool.query(`SELECT * FROM discount`);
    return result[0]
}

export async function getDiscount(id) {
    const result = await pool.query(`SELECT * FROM discount WHERE id = ?`, [id]);
    return result[0]
}

export async function getDiscountedProducts() {
    const result = await pool.query(`SELECT * FROM product WHERE discount_id IS NOT null;`);
    return result[0]
}

export async function getCollection(id) {
    const result = await pool.query(`SELECT * FROM collection WHERE id = ?;`, [id]);
    return result[0]
}

export async function getCollectionProducts(id) {
    const result = await pool.query(
        `SELECT product.*, collection.name as col_name 
        FROM product, collection_product, collection 
        WHERE product.id = collection_product.product_id 
            AND collection_product.collection_id = collection.id 
            AND collection.id = ?;`, [id]);
    return result[0]
}


export async function getOrderProductsByOrderId(id) {
    const result = await pool.query(
        `SELECT product.* 
        FROM order_items, product 
        WHERE order_items.product_id = product.id 
            AND order_items.order_id = ?;`, [id]);
    return result[0]
}

export async function addProduct(category, name, price, discount_id, attribute, image) {
    const result = await pool.query(`INSERT INTO product (category, name, price, discount_id, attribute, image)
    VALUES (?, ?, ?, ?, ?, ?);`, [category, name, price, discount_id, JSON.stringify(attribute), image]).then(async (res) => {
        return await getProductById(+res[0].insertId)
    });
    return result[0]
}

export async function updateProduct(id, category, name, price, discount_id, image) {
    const result = await pool.query(`
    UPDATE product
    SET
        name = ?,
        category = ?,
        price = ?,
        discount_id = ?,
        image = ?
    WHERE id = ?;`, [name, category, price, discount_id, image, id])
    return result[0]
}

export async function addUser(email, password, firstName, lastName) {
    const result = await pool.query(`
    INSERT INTO user (email, password, first_name, last_name) 
    VALUES (?, ?, ?, ?)`, 
    [email, password, firstName, lastName])
    return result[0]
}

export async function getUserbyEmail(email){
    const result = await pool.query(`SELECT email, first_name, last_name, zip_code, city, address, phone_number FROM user WHERE email LIKE ?`, [email])
    return result[0][0]
}

export async function getUserbyId(id){
    const result = await pool.query(`SELECT email, first_name, last_name, zip_code, city, address, phone_number FROM user WHERE id = ?`, [id])
    return result[0][0]
}

export async function canSignIn(email){
    const result = await pool.query(`SELECT password FROM user WHERE email LIKE ?`, [email])
    return result[0][0]
}

export async function changePassword(email, password){
    const result = await pool.query(`UPDATE user SET password = ? WHERE email LIKE ?`, [password, email])
    return result[0]
}

export async function updateContact(email, zipCode, city, address, phoneNumber){
    const result = await pool.query(`
    UPDATE user 
    SET 
        zip_code = ?,
        city = ?,
        address = ?,
        phone_number = ?
    WHERE email LIKE ?`, [zipCode, city, address, phoneNumber, email])
    return result[0]
}


export async function isAdmin(email){
    const result = await pool.query(`SELECT count(email) as isAdmin FROM user, admin WHERE user.id = admin.user_id AND user.email LIKE ? GROUP BY email;`, [email])
    return result[0][0]
}

export async function deleteProduct(id){
    const result = await pool.query('DELETE FROM product WHERE id = ?', [id])
    return result[0]
}


