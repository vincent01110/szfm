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
        console.log(p);
    }

    const addHandler = () => {
        navigate("/admin/dashboard/add")
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
        <Buttons onAdd={addHandler} />
        <ProductTable products={products} selectChangeHandler={selectChangeHandler} selectedProduct={selectedProduct} />
        
    </div>
}

export default DashBoard;