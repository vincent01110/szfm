import React from 'react';
import style from './CategoriesPanel.module.css';


const CategoriesPanel = (props) => {

    return <div className={style.panel}>
        <ul className={style.list}> 
            <li onClick={() => props.setActive('phone')} className={`${props.active === 'phone' && style.active}`}>Telefon</li>
            <li onClick={() => props.setActive('tablet')} className={`${props.active === 'tablet' && style.active}`}>Tablet</li>
            <li onClick={() => props.setActive('laptop')} className={`${props.active === 'laptop' && style.active}`}>Laptop</li>
            <li onClick={() => props.setActive('smart_watch')} className={`${props.active === 'smart_watch' && style.active}`}>Okosóra</li>
            <li onClick={() => props.setActive('tv')} className={`${props.active === 'tv' && style.active}`}>Tv</li>
        </ul>
    </div>;
}
 
export default CategoriesPanel;