import React from 'react';
import style from './CategoriesPanel.module.css';


const CategoriesPanel = (props) => {

    return <div className={style.panel}>
        <ul className={style.list}> 
            <li onClick={() => props.setActive(0)}>Telefon</li>
            <li onClick={() => props.setActive(1)}>Tablet</li>
            <li onClick={() => props.setActive(2)}>Laptop</li>
            <li onClick={() => props.setActive(3)}>Okosóra</li>
            <li onClick={() => props.setActive(4)}>Tv</li>
        </ul>
    </div>;
}
 
export default CategoriesPanel;