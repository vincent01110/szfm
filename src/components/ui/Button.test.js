import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extra matchers like toBeInTheDocument
import Button from './Button';

test('renders button correctly', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
        <Button className="custom-class" type="submit" onClick={onClickMock} disabled={false}>
            Click me
        </Button>
    );

    const button = getByText('Click me');

    // Check if the button is rendered with the correct class and attributes
    expect(button).toHaveClass('button custom-class');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).not.toHaveAttribute('disabled');

    // Trigger a click event and check if the onClick callback is called
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('renders disabled button correctly', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
        <Button className="custom-class" type="submit" onClick={onClickMock} disabled={true}>
            Click me
        </Button>
    );

    const button = getByText('Click me');

    // Check if the button is rendered with the correct class and attributes
    expect(button).toHaveClass('button custom-class');
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('disabled');

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
});
