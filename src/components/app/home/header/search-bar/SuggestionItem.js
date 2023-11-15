import React from "react";
import style from "./SuggestionItem.module.css";

const SuggestionItem = (props) => {

    const formatedPrice = new Intl.NumberFormat('hu-HU', {maximumSignificantDigits: 20, style: 'currency', currency: 'HUF' })
                            .format(props.product.price);

    return <div className={style.item}>
        <img src={props.product.image} alt={props.product.name} className={style.img}/>
        <div className={style.info}>
        <h3>{props.product.name}</h3>
        <h4>{formatedPrice}</h4>
        </div>
    </div>
}

export default SuggestionItem;