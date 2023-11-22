// Card.js
import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();
        }
    };

    return (
        <div className={`${style.card} ${props.className}`} onClick={handleClick} data-testid="test-card">
            {props.children}
        </div>
    );
};
export default Card;
