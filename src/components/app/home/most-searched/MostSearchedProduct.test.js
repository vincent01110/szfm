import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MostSearchedProduct from './MostSearchedProduct';
import { useNavigate } from 'react-router';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: jest.fn(),
}));

const mockProduct = {
    id: '123',
    name: 'Test Product',
    image: 'test-image.jpg',
    price: 1000, // Assuming price is in HUF
};

describe('MostSearchedProduct', () => {
    test('renders MostSearchedProduct component with product details', () => {
        render(<MostSearchedProduct product={mockProduct} />);

        // Check if the product details are rendered
        const productImage = screen.getByAltText(mockProduct.name);
        expect(productImage).toBeInTheDocument();

        const productName = screen.getByText(mockProduct.name);
        expect(productName).toBeInTheDocument();

        // Use a regular expression to match the price with flexible spacing
        const priceRegex = /1\s*000\s*Ft/;
        const productPrice = screen.getByText(priceRegex);
        expect(productPrice).toBeInTheDocument();
    });
});
