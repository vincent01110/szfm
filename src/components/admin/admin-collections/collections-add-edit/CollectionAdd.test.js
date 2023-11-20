import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import CollectionAdd from './CollectionAdd';

jest.mock('axios'); // Mock the entire axios module

describe('CollectionAdd Component', () => {
    // Example test case:
    it('renders the component and loads data from the mock API', async () => {
        // Mock the API response
        const mockApiResponse = [
            { id: 1, name: 'Product 1', price: 10 },
            { id: 2, name: 'Product 2', price: 20 },
        ];

        // Set up the mock behavior for the axios.get function
        axios.get.mockResolvedValue({ data: mockApiResponse });

        const { getByText } = render(<CollectionAdd />);

        // Wait for the component to load data from the mock API
        await waitFor(() => {
            expect(getByText('Product 1')).toBeInTheDocument();
            expect(getByText('Product 2')).toBeInTheDocument();
        });
    });
});
