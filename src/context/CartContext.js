import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log(item);
    var result = cartItems.find(e => e.id === item.id)
    console.log(result);
    if(!result) setCartItems([...cartItems, item]);
  };

  const hasItem = (item) => {
    var result = cartItems.find(e => e.id === item.id)
    if(result){
        return true;
    } else {
        return false;
    }
  }

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, hasItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};