import React from 'react';
import CategoriesPanel from './CategoriesPanel';
import style from './CategoriesCard.module.css'



const CategoriesCard = () => {
    
    return <div className={style.card}>
        <CategoriesPanel />
    </div>;
}
 
export default CategoriesCard;