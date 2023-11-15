import React, { useState } from 'react';
import CategoriesPanel from './CategoriesPanel';
import style from './CategoriesCard.module.css';



const CategoriesCard = () => {
    const [activeCat, setActiveCat] = useState(0)

    const activeSwitchHandler = (panelId) => {
        setActiveCat(panelId)
        console.log(panelId);
    }
    
    return <div className={style.card}>
        <CategoriesPanel active={activeCat} setActive={activeSwitchHandler} />
    </div>;
}
 
export default CategoriesCard;