import React, {useState} from 'react';
import Header from '../home/header/Header';
import MostSearchedCard from '../home/most-searched/MostSearchedCard';
import Footer from '../home/footer/Footer';
import Card from '../../ui/Card';
import { useCart } from '../../../context/CartContext';
import style from './Cart.module.css';
import CartItem from './cart-item/CartItem';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router';

const Cart = () => {
    const cart = useCart()
    const navigate = useNavigate()


    return <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        <Header />
        <Card className={style.cart}>
            {cart.cartItems.length > 0 ? <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                {cart.cartItems.map((item) => {return <CartItem key={item.id} item={item} />})}
                <Button className={style.checkoutButton} onClick={() => navigate('/checkout')}>Megrendelés</Button>
            </div>
             : <h1>A kosár üres</h1>}
        </Card>
        <MostSearchedCard />
        <Footer />
    </div>
}

export default Cart;