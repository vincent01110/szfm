import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

test('renders card correctly', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
        <Card className="custom-class" data-testid="test-card">
            <span>Card Content</span>
        </Card>
    );

    const card = getByTestId('test-card');
    expect(card).toBeInTheDocument();

    // Check if the card is rendered with the correct class
    expect(card).toHaveClass('card custom-class');

});

test('renders card without onClick correctly', () => {
    const { getByTestId } = render(
        <Card className="custom-class" data-testid="test-card">
            <span>Card Content</span>
        </Card>
    );

    const card = getByTestId('test-card');

    // Check if the card is rendered with the correct class
    expect(card).toHaveClass('card custom-class');

    // Try to trigger a click event on the card without onClick, and check if it doesn't throw an error
    fireEvent.click(card);
});
