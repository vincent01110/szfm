import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import the Jest DOM extension
import CategoriesPanel from './CategoriesPanel';

describe('CategoriesPanel Component', () => {
    test('renders categories panel with options', () => {
        render(<CategoriesPanel active="phone" setActive={() => {}} />);

        // Assertions
        expect(screen.getByText('Telefon')).toBeInTheDocument();
        expect(screen.getByText('Tablet')).toBeInTheDocument();
        expect(screen.getByText('Laptop')).toBeInTheDocument();
        expect(screen.getByText('Okosóra')).toBeInTheDocument();
        expect(screen.getByText('Tv')).toBeInTheDocument();
    });

    test('calls setActive when a category is clicked', () => {
        const setActiveMock = jest.fn();
        render(<CategoriesPanel active="phone" setActive={setActiveMock} />);

        // Click on a category
        fireEvent.click(screen.getByText('Tablet'));

        // Assertion
        expect(setActiveMock).toHaveBeenCalledWith('tablet');
    });

    test('applies "active" class to the active category', () => {
        render(<CategoriesPanel active="tablet" setActive={() => {}} />);

        // Assertions
        expect(screen.getByText('Tablet')).toHaveClass('active');
        expect(screen.getByText('Telefon')).not.toHaveClass('active');
    });
});
