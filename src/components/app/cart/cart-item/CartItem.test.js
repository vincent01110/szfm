import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './CartItem';
import { CartProvider, useCart } from '../../../../context/CartContext';

jest.mock('../../../../context/CartContext', () => ({
    ...jest.requireActual('../../../../context/CartContext'),
    useCart: jest.fn(),
}));

test('renders CartItem component', () => {
    const mockCartItem = {
        id: 1,
        name: 'Test Item',
        image: 'test-image.jpg',
        price: 10.99,
    };

    const mockRemoveFromCart = jest.fn();

    useCart.mockReturnValue({
        removeFromCart: mockRemoveFromCart,
    });

    render(
        <CartProvider>
            <CartItem item={mockCartItem} />
        </CartProvider>
    );

    const itemName = screen.getByText('Test Item');
    expect(itemName).toBeInTheDocument();

    // Use a regular expression to match the price text with possible whitespace characters
    const itemPrice = screen.getByText(/10,99(\s| )?Ft/i);
    expect(itemPrice).toBeInTheDocument();

    const deleteButton = screen.getByRole('button', { name: /törlés/i });
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(1);
});
