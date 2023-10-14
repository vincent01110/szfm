import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'webshop'
}).promise()


export async function getProducts(){
    const result = await pool.query("SELECT * FROM product");
    return result[0]
}

export async function getProductById(id){
    const result = await pool.query(`SELECT * FROM product WHERE product.id = ?`, [id]);
    return result[0]
}

export async function getProductsByName(name){
    const result = await pool.query(`SELECT * FROM product WHERE product.name LIKE "%${name}%"`);
    return result[0]
}

export async function getProductsByCategory(category){
    const result = await pool.query(`SELECT * FROM product WHERE product.category LIKE "${category}"`);
    return result[0]
}

export async function getDiscount(id){
    const result = await pool.query(`SELECT * FROM discount WHERE id = ${id}`);
    return result[0]
}

export async function getDiscountedProducts(){
    const result = await pool.query(`SELECT * FROM product WHERE discount_id IS NOT null;`);
    return result[0]
}

export async function getCollection(id){
    const result = await pool.query(`SELECT * FROM collection WHERE id = ${id};`);
    return result[0]
}

export async function getCollectionProducts(id){
    const result = await pool.query(`SELECT product.*, collection.name as col_name FROM product, collection_product, collection WHERE product.id = collection_product.product_id AND collection_product.collection_id = collection.id AND collection.id = ${id};`);
    return result[0]
}


export async function getOrderProductsByOrderId(id){
    const result = await pool.query(`SELECT product.* FROM order_items, product WHERE order_items.product_id = product.id AND order_items.order_id = ${id};`);
    return result[0]
}