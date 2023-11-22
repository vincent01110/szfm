import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SuggestionItem from './SuggestionItem';
import { useNavigate } from 'react-router';

jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useNavigate: jest.fn(),
}));

const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 1000,
    image: 'test-image.jpg',
};

describe('SuggestionItem Component', () => {
    test('renders product information', () => {
        render(<SuggestionItem product={mockProduct} />);

        // Assertions for product information
        expect(screen.getByText(/Test Product/)).toBeInTheDocument();
        expect(screen.getByText(/1[\s ]000[\s ]Ft/)).toBeInTheDocument(); // Adjust the regex for space or non-breaking space
        expect(screen.getByAltText('Test Product')).toBeInTheDocument();
    });
});
