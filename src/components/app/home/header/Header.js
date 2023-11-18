import React from 'react';
import SearchBar from './search-bar/SearchBar';
import style from './Header.module.css';
import {ReactComponent as UserIcon} from '../../../../assets/user.svg';
import { useNavigate } from 'react-router';
import Card from '../../../ui/Card';
import {ReactComponent as CartIcon} from '../../../../assets/cart.svg';

const logo = require('../../../../assets/webshop-logo.jfif')

const Header = () => {
    const navigate = useNavigate()
    
    const goHome = () => {
        navigate('/')
    }


    return ( <div className={style.header}>
        <img src={logo} alt='Wild West Electronics' className={style.logo} onClick={goHome}/>
        <SearchBar />
        <Card className={style.userActionDiv}>
            <CartIcon className={style.user} onClick={() => navigate('/cart')}/>
            <UserIcon className={style.user}/>
        </Card>
    </div> );
}
 
export default Header;