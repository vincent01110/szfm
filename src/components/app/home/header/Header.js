import React from 'react';
import SearchBar from './search-bar/SearchBar';
import style from './Header.module.css';
import {ReactComponent as UserIcon} from '../../../../assets/user.svg';
import { useNavigate } from 'react-router';
import Card from '../../../ui/Card';
import {ReactComponent as CartIcon} from '../../../../assets/cart.svg';
import { useCart } from '../../../../context/CartContext';

const logo = require('../../../../assets/webshop-logo.jfif')

const Header = () => {
    const navigate = useNavigate()
    const cart = useCart()

    const goHome = () => {
        navigate('/')
    }


    return ( <div className={style.header}>
        <img src={logo} alt='Wild West Electronics' className={style.logo} onClick={goHome}/>
        <SearchBar />
        <Card className={style.userActionDiv}>
            <div>{cart.cartItems.length}</div>
            <CartIcon className={style.icon} onClick={() => navigate('/cart')}/>
            <UserIcon className={style.icon}/>
        </Card>
    </div> );
}
 
export default Header;