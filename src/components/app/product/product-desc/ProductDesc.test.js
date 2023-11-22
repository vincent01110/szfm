import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ProductDesc from './ProductDesc';

describe('ProductDesc', () => {
    const sampleDesc = {
        category1: {
            property1: 'value1',
            property2: 'value2',
        },
        category2: {
            property3: 'value3',
            property4: 'value4',
        },
    };

    test('renders ProductDesc component with description', async () => {
        const { getByText } = render(<ProductDesc desc={sampleDesc} loading={false} />);

        // Check if the rendered component contains the properties and values from sampleDesc
        Object.entries(sampleDesc).forEach(([category, properties]) => {
            expect(getByText(category)).toBeInTheDocument();

            Object.entries(properties).forEach(([property, value]) => {
                // Use more specific queries to find elements
                expect(getByText(property, { exact: false })).toBeInTheDocument();
                expect(getByText(value, { exact: false })).toBeInTheDocument();
            });
        });
    });

    test('renders ProductDesc component with loading spinner', async () => {
        const { getByTestId } = render(<ProductDesc loading={true} />);

        // Check if the loading spinner is present when loading is true
        const loadingSpinner = getByTestId('loading-spinner');
        expect(loadingSpinner).toBeInTheDocument();
    });
});
