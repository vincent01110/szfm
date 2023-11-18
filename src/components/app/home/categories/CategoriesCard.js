import React, { useEffect, useState } from 'react';
import CategoriesPanel from './CategoriesPanel';
import style from './CategoriesCard.module.css';
import ItemPanel from './ItemPanel';


const CategoriesCard = () => {
    const [activeCat, setActiveCat] = useState('phone')

    
    const activeSwitchHandler = (panelId) => {
        setActiveCat(panelId)
        // axios.get(`http://localhost:9090/products/category/${panelId}?limit=10`, {
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }}).then((response) => setItems(response.data)).catch(err => {
        //         console.error(err)
        //     })
    }

    
    
    return <div className={style.card}>
        <CategoriesPanel active={activeCat} setActive={activeSwitchHandler} />
        <ItemPanel query={activeCat} />
    </div>;
}
 
export default CategoriesCard;