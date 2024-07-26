import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from '@/components/header';

describe('Header component', () => {
  it('should render correctly', () => {
    render(<Header />);
    const headingElement = screen.getByText(/trabalhe no elo7/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('should have the correct background images', () => {
    render(<Header />);
    const sectionElement = screen.getByTestId('header');
    expect(sectionElement).toHaveClass('bg-header-mobile');
    expect(sectionElement).toHaveClass('md:bg-header-desktop');
  });
});