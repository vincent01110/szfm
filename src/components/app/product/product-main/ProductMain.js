import React from 'react';
import style from './ProductMain.module.css';
import Card from '../../../ui/Card';
import { ProgressSpinner } from 'primereact/progressspinner';

const ProductMain = (props) => {
    const formatedPrice = new Intl.NumberFormat('hu-HU', { maximumSignificantDigits: 20, style: 'currency', currency: 'HUF' })
        .format(props.product.discountedPrice ? props.product.discountedPrice : props.product.price);


    return <Card className={style.container}>
        {props.loading ?
                <div className={style.spinnerDiv}><ProgressSpinner style={{width: '30rem', height: '20rem'}} strokeWidth="8" fill="white" animationDuration="1s" /></div>
            :
            <>
                <img src={props.product.image} />
                <div className={style.info}>
                    <h1>{props.product.name}</h1>
                    <h2>{formatedPrice}</h2>
                </div>
            </>}
    </Card>;
}

export default ProductMain;