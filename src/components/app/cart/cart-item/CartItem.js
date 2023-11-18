import React from 'react';
import style from './CartItem.module.css';
import Button from '../../../ui/Button';
import { useCart } from '../../../../context/CartContext';

const CartItem = (props) => {
    const cart = useCart()

    const formatedPrice = new Intl.NumberFormat('hu-HU', { maximumSignificantDigits: 20, style: 'currency', currency: 'HUF' })
        .format(props.item.discountedPrice ? props.item.discountedPrice : props.item.price);


    return <div className={style.cartItem}>
        <img src={props.item.image} />
        <div className={style.info}>
            <h3>{props.item.name}</h3>
            <h3>{formatedPrice}</h3>
        </div>
        <Button className={style.button} onClick={() => cart.removeFromCart(props.item.id)}>Törlés</Button>
    </div>;
}

export default CartItem;