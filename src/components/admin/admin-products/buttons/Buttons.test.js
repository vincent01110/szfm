import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Buttons from './Buttons';

// Mock the 'primereact/toast' and 'primereact/confirmpopup' modules
jest.mock('primereact/toast', () => ({ useRef: jest.fn() }));
jest.mock('primereact/confirmpopup', () => ({ confirmPopup: jest.fn() }));

describe('Buttons Component', () => {
    test('calls onAdd function when Add button is clicked', () => {
        const onAddMock = jest.fn();
        const { getByTestId } = render(<Buttons onAdd={onAddMock} />);
        const addButton = getByTestId('add-button');

        fireEvent.click(addButton);

        expect(onAddMock).toHaveBeenCalled();
    });

    test('calls onDelete function when Delete button is clicked and user confirms deletion', () => {
        const onDeleteMock = jest.fn();
        const selectedProduct = { id: 1 }; // Assuming a selected product for the test
        const { getByTestId } = render(<Buttons onDelete={onDeleteMock} selectedProduct={selectedProduct} />);
        const deleteButton = getByTestId('delete-button');

        // Mock the ConfirmPopup to simulate user accepting the deletion
        jest.spyOn(window, 'confirm').mockImplementation(() => true);

        fireEvent.click(deleteButton);

        expect(onDeleteMock).toHaveBeenCalled();
    });

    test('does not call onDelete function when Delete button is clicked and user rejects deletion', () => {
        const onDeleteMock = jest.fn();
        const selectedProduct = { id: 1 }; // Assuming a selected product for the test
        const { getByTestId } = render(<Buttons onDelete={onDeleteMock} selectedProduct={selectedProduct} />);
        const deleteButton = getByTestId('delete-button');

        // Mock the ConfirmPopup to simulate user rejecting the deletion
        jest.spyOn(window, 'confirm').mockImplementation(() => false);

        fireEvent.click(deleteButton);

        expect(onDeleteMock).not.toHaveBeenCalled();
    });

    test('calls onEdit function when Edit button is clicked', () => {
        const onEditMock = jest.fn();
        const selectedProduct = { id: 1 }; // Assuming a selected product for the test
        const { getByTestId } = render(<Buttons onEdit={onEditMock} selectedProduct={selectedProduct} />);
        const editButton = getByTestId('edit-button');

        fireEvent.click(editButton);

        expect(onEditMock).toHaveBeenCalled();
    });
});
