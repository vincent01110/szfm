import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSignOut } from "react-auth-kit";
import axios from "axios";
import ProductTable from "./product-table/ProductTable";
import Buttons from "./buttons/Buttons";

const DashBoard = () => {
    const signout = useSignOut()
    const navigate = useNavigate()
    const [products, setProducts] = useState()
    const [selectedProduct, setSelectedProduct] = useState()

    const logoutHandler = () => {
        signout()
        localStorage.removeItem('email')
        navigate("/admin/signin")
    }

    const selectChangeHandler = (p) => {
        setSelectedProduct(p)
    }

    const addHandler = () => {
        navigate("/admin/dashboard/add")
    }

    const deleteHandler = async () => {
        try{
            axios.delete(`http://localhost:9090/products/${selectedProduct.id}`, {headers: { 
                'Content-Type': 'application/json'
            }}).then(() => {
                let index = products.indexOf(selectedProduct)
                let temp = [...products]
                temp.splice(index, 1)
                setProducts(temp)
            })
        } catch(err){
            console.error(err);
        }
    }

    const editHandler = () => {
        navigate('/admin/dashboard/edit/' + selectedProduct.id)
    }

    useEffect(() => {
        try {
            // Make an API call to your authentication endpoint (replace with your actual API URL)
            axios.get('http://localhost:9090/products', {headers: { 
                'Content-Type': 'application/json'
            }}).then((response) => {
                setProducts(response.data)
            })
        } catch (error) {
            console.error('API request error:', error);
        }
    }, [])

    return <div>
        {localStorage.getItem('email')}
        <button onClick={logoutHandler}>LogOut</button>
        <Buttons onAdd={addHandler} onDelete={deleteHandler} onEdit={editHandler} selectedProduct={selectedProduct} />
        <ProductTable products={products} selectChangeHandler={selectChangeHandler} selectedProduct={selectedProduct} />
        
    </div>
}

export default DashBoard;