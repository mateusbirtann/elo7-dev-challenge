import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroDescriptionSection } from '@/components/home/hero-description-section';

describe('Hero Description Section component', () => {
  it('renders the Section with correct class names', () => {
    render(<HeroDescriptionSection />);
    const sectionElement = screen.getByTestId('hero-description-section');

    expect(sectionElement).toHaveClass('mb-10');
  });

  it('renders the correct text', () => {
    render(<HeroDescriptionSection />);
    const textElement = screen.getByText(/Lorem ipsum dolor sit amet/i);

    expect(textElement).toBeInTheDocument();
  });

  it('renders the Link component with icon and href', () => {
    const { container } = render(<HeroDescriptionSection />);
    const linkElement = screen.getByText(/vagas em aberto/i);
    const chevronIconElement = container.querySelector('.lucide-chevron-right');

    expect(linkElement).toHaveAttribute('href', 'https://elo7.gupy.io/');
    expect(chevronIconElement).toBeInTheDocument();
  });
});
