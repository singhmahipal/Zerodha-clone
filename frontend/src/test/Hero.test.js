import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero.js';

describe('Hero Component', () => {
    test('renders hero image', () => {
        render(<Hero />);
        const heroImage = screen.getByAltText('hero image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/homeHero.png');
    });
    test('renders signup button', () => {
        render(<Hero />);
        const SignUpButton = screen.getByRole('button', {name: /SignUp Now/i});
        expect(SignUpButton).toBeInTheDocument();
        expect(SignUpButton).toHaveClass('btn-primary');
    });
});