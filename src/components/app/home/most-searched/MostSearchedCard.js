import React, { useEffect, useState } from 'react';
import style from './MostSearchedCard.module.css';
import Card from '../../../ui/Card';
import MostSearchedProduct from './MostSearchedProduct';
import axios from 'axios';

let ids = [1, 2, 4, 5]


const MostSearchedCard = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
              const responseArray = await Promise.all(
                ids.map(async (id) => {
                  const response = await axios.get(`http://localhost:9090/products/${id}`, {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  });
                  return response.data;
                })
              );
      
              setProducts(responseArray);
            } catch (error) {
              console.error('API request error:', error);
            }
          };
      
          fetchData();
    }, [])


    return <Card className={style.container}>
        {products.map((product) => {
            return <MostSearchedProduct key={product.id} product={product} />
        })}
    </Card>;
}

export default MostSearchedCard;