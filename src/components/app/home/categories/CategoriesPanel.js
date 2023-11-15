import React from 'react';
import style from './CategoriesPanel.module.css';


const CategoriesPanel = () => {

    return <div className={style.panel}>
        <ul className={style.list}> 
            <li>Telefon</li>
            <li>Tablet</li>
            <li>Laptop</li>
            <li>Okosóra</li>
            <li>Tv</li>
        </ul>
    </div>;
}
 
export default CategoriesPanel;