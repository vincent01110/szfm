import React from 'react';
import Card from '../../../ui/Card';
import style from './Footer.module.css';
import logo from '../../../../assets/webshop-logo.jfif';


const Footer = () => {
    return <Card className={style.footer}>
        <div>
            <h1>Elérhetőség</h1>
            <h2>Telefon: +36 70/123-4567</h2>
            <h2>Email: info@wildwestelectronics.hu</h2>
            <h2>Bolt: 1111 Budapest, V. kerület, Szabadság út 49</h2>
        </div>
        <div style={{marginRight: 0, marginLeft: 'auto'}}>
            <img src={logo} alt='logo' />
        </div>
    </Card>;
}
 
export default Footer;