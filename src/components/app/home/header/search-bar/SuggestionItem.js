import React from "react";
import style from "./SuggestionItem.module.css";
import { useNavigate } from "react-router";

const SuggestionItem = (props) => {
    const navigate = useNavigate()

    const formatedPrice = new Intl.NumberFormat('hu-HU', {maximumSignificantDigits: 20, style: 'currency', currency: 'HUF' })
                            .format(props.product.price);

    return <div className={style.item} onClick={() => navigate(`/product/${props.product.id}`)}>
        <img src={props.product.image} alt={props.product.name} className={style.img}/>
        <div className={style.info}>
        <h3>{props.product.name}</h3>
        <h4>{formatedPrice}</h4>
        </div>
    </div>
}

export default SuggestionItem;