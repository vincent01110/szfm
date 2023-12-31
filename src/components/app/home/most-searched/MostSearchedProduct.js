import React from 'react';
import style from './MostSearchedProduct.module.css'
import Card from '../../../ui/Card';
import { useNavigate } from 'react-router';


const MostSearchedProduct = (props) => {
    const navigate = useNavigate()

    const formatedPrice = new Intl.NumberFormat('hu-HU', {maximumSignificantDigits: 20, style: 'currency', currency: 'HUF' })
                            .format(props.product.discountedPrice ? props.product.discountedPrice : props.product.price);

    return <Card className={style.container} onClick={() => navigate(`/product/${props.product.id}`)}>
        <img src={props.product.image} alt={props.product.name} />
        <h2>{props.product.name}</h2>
        <h3>{formatedPrice}</h3>
    </Card>;
}
 
export default MostSearchedProduct;