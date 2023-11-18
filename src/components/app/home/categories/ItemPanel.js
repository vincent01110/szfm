import React, {useEffect, useState} from 'react';
import style from './ItemPanel.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router';


const ItemPanel = (props) => {
    const [items, setItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:9090/products/category/${props.query}?limit=10`, {
            headers: {
                'Content-Type': 'application/json'
            }}).then((response) => setItems(response.data)).catch(err => {
                console.error(err)
            })
    }, [props.query])

    return <div className={style.panel}>
        <ul style={items.length > 5 ? {columnCount: 2} : {columnCount: 1}}>
        {items.map((item) => {
            return <li key={item.id} onClick={() => navigate(`/product/${item.id}`)} >{item.name}</li>
        })}
        </ul>
    </div>;
}
 
export default ItemPanel;