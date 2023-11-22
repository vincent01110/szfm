import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer Component', () => {
    test('renders contact information and logo', () => {
        render(<Footer />);

        // Assertions for contact information
        expect(screen.getByText('Telefon: +36 70/123-4567')).toBeInTheDocument();
        expect(screen.getByText('Email: info@wildwestelectronics.hu')).toBeInTheDocument();
        expect(screen.getByText('Bolt: 1111 Budapest, V. kerület, Szabadság út 49')).toBeInTheDocument();

        // Assertion for logo
        const logoImage = screen.getByAltText('logo');
        expect(logoImage).toBeInTheDocument();
        expect(logoImage.src).toContain('webshop-logo.jfif');
    });
});
