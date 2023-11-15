import React from "react";
import style from "./SuggestionItem.module.css";

const SuggestionItem = (props) => {

    return <div className={style.item}>
        <img src={props.product.image} alt={props.product.name} className={style.img}/>
        <div className={style.info}>
        <h3>{props.product.name}</h3>
        <h4>{props.product.price}</h4>
        </div>
    </div>
}

export default SuggestionItem;