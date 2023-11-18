import React from 'react';
import style from './Checkout.module.css';
import Header from '../home/header/Header';
import Card from '../../ui/Card';
import MostSearchedCard from '../home/most-searched/MostSearchedCard';
import Footer from '../home/footer/Footer';
import idk from '../../../assets/idk.jpg';


const Checkout = () => {
    return <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
    <Header />
    <Card className={style.checkout}>
        <img src={idk} alt='idk' style={{width: '20rem'}} />
    </Card>
    <MostSearchedCard />
    <Footer />
</div>
}
 
export default Checkout;