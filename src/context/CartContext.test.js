import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

// Mock child component to test context functionality
const TestComponent = () => {
  const { addToCart, removeFromCart, hasItem, getTotalPrice } = useCart();

  return (
    <div>
      <button onClick={() => addToCart({ id: 1, name: 'Test Product', price: 10 })}>
        Add to Cart
      </button>
      <button onClick={() => removeFromCart(1)}>Remove from Cart</button>
      <div data-testid="has-item">{hasItem({ id: 1 }) ? 'Yes' : 'No'}</div>
      <div data-testid="total-price">{getTotalPrice()}</div>
    </div>
  );
};

describe('CartProvider', () => {
  it('should add item to cart', () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(getByText('Add to Cart'));
    expect(getByTestId('has-item')).toHaveTextContent('Yes');
  });

  it('should remove item from cart', () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(getByText('Add to Cart'));
    fireEvent.click(getByText('Remove from Cart'));
    expect(getByTestId('has-item')).toHaveTextContent('No');
  });

  it('should calculate total price', () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    fireEvent.click(getByText('Add to Cart'));
    expect(getByTestId('total-price')).toHaveTextContent('10');
  });
});
