import React, { useEffect, useState } from 'react';
import style from './ProductMain.module.css';
import Card from '../../../ui/Card';
import { ProgressSpinner } from 'primereact/progressspinner';
import Button from '../../../ui/Button';
import { ReactComponent as CartIcon } from '../../../../assets/cart.svg';
import { useCart } from '../../../../context/CartContext';

const ProductMain = (props) => {

    const { addToCart, hasItem, cartItems } = useCart()
    const [added, setAdded] = useState()

    

    const formatedPrice = new Intl.NumberFormat('hu-HU', { maximumSignificantDigits: 20, style: 'currency', currency: 'HUF' })
        .format(props.product.discountedPrice ? props.product.discountedPrice : props.product.price);

    const addToCartHandler = () => {
        addToCart(props.product)
    }

    return <Card className={style.container}>
        {props.loading ?
            <div className={style.spinnerDiv}><ProgressSpinner style={{ width: '30rem', height: '20rem' }} strokeWidth="8" fill="white" animationDuration="1s" /></div>
            :
            <>
                <img src={props.product.image} />
                <div className={style.info}>
                    <h1>{props.product.name}</h1>
                    <h2>{formatedPrice}</h2>
                    <Button className={style.cartButton} onClick={addToCartHandler}>{hasItem(props.product) ? 'Hozzáadva' : <CartIcon className={style.cart} />}</Button>
                </div>
            </>}
    </Card>;
}

export default ProductMain;