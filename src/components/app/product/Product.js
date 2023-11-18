import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../home/header/Header';
import MostSearchedCard from '../home/most-searched/MostSearchedCard';
import Footer from '../home/footer/Footer';
import ProductMain from './product-main/ProductMain';
import axios from 'axios';


const Product = () => {
    const [product, setProduct] = useState({})
    const param = useParams()
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        axios.get(`http://localhost:9090/products/${param.id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setProduct(response.data)
        }).catch((error) => {
            console.error('API request error:', error);
        }).finally(() => {
            setLoading(false)
            window.scrollTo({ top: 0 });
        });
    }, [param.id])

    return <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        <Header />
        <ProductMain loading={loading} product={product} />
        <MostSearchedCard />
        <Footer />
    </div>
}

export default Product;