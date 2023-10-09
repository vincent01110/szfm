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
    const result = await pool.query(`SELECT * FROM product WHERE product.id = ${id}`);
    return result[0]
}

export async function getProductsByName(name){
    const result = await pool.query(`SELECT * FROM product WHERE product.name LIKE "%${name}%"`);
    return result[0]
}

