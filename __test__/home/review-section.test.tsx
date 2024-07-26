import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReviewSection } from '@/components/home/review-section';

describe('Review Section component', () => {
  it('renders the Section with correct class names', () => {
    render(<ReviewSection />);
    const sectionElement = screen.getByTestId('review-section');

    expect(sectionElement).toHaveClass('my-10');
  });

  it('renders the correct text', () => {
    render(<ReviewSection />);
    const textElement = screen.getByText(/Palavra da vendedora/i);

    expect(textElement).toBeInTheDocument();
  });

  it('renders the desktop image with correct attributes', () => {
    const { container } = render(<ReviewSection />);
    const desktopImage = container.querySelector('img[data-testid="review-section-desktop-img"]');

    expect(desktopImage).toHaveClass('hidden md:block');
  });

  it('renders the desktop image with correct attributes', () => {
    const { container } = render(<ReviewSection />);
    const mobileImage = container.querySelector('img[data-testid="review-section-mobile-img"]');

    expect(mobileImage).toHaveClass('md:hidden');
  });

  it('renders the correct title card', () => {
    render(<ReviewSection />);
    const titleElement = screen.getByText(/Palavra da vendedora/i);
    const subtitleElement = screen.getByText(/Sed rutrum condimentum/i);
    const textElement = screen.getByText(/Donec in vestibulum elit. Aliquam finibus facil/i);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
