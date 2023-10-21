import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSignOut } from "react-auth-kit";
import axios from "axios";
import ProductTable from "./product-table/ProductTable";

const DashBoard = () => {
    const signout = useSignOut()
    const navigate = useNavigate()
    const [products, setProducts] = useState()

    const logoutHandler = () => {
        signout()
        navigate("/admin/signin")
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
        "DashBoard"
        <button onClick={logoutHandler}>LogOut</button>
        <ProductTable products={products} />
        
    </div>
}

export default DashBoard;