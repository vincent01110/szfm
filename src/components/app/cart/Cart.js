import React, {useState} from 'react';
import Header from '../home/header/Header';
import MostSearchedCard from '../home/most-searched/MostSearchedCard';
import Footer from '../home/footer/Footer';
import Card from '../../ui/Card';
import { useCart } from '../../../context/CartContext';
import style from './Cart.module.css';
import CartItem from './cart-item/CartItem';

const Cart = () => {
    const cart = useCart()


    return <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        <Header />
        <Card className={style.cart}>
            {cart.cartItems.map((item) => {
                return <CartItem key={item.id} item={item} />
            })}
        </Card>
        <MostSearchedCard />
        <Footer />
    </div>
}

export default Cart;