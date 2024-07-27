import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BenefitsSection } from '@/components/home/benefits-section';
import { benefits } from '@/constants/benefits';

describe('Benefits Section component', () => {
  it('renders the Section with correct class names', () => {
    render(<BenefitsSection />);
    const sectionElement = screen.getByTestId('benefits-section');

    expect(sectionElement).toHaveClass(
      'my-10 md:my-20 flex flex-col lg:flex-row items-center gap-10 md:gap-4 justify-center',
    );
  });

  it('renders the correct number of benefit items', () => {
    render(<BenefitsSection />);
    const benefitItems = screen.getAllByTestId('benefits-section-item');
    expect(benefitItems).toHaveLength(benefits.length);
  });

  it('renders the correct title', () => {
    render(<BenefitsSection />);
    const titleElement = screen.getByText('Resultados');
    expect(titleElement).toBeInTheDocument();
  });

  benefits.forEach((benefit, index) => {
    it(`renders benefit item ${index + 1} with correct title, description, and image`, () => {
      render(<BenefitsSection />);
      const titleElement = screen.getByText(benefit.title);
      const descriptionElements = screen.getAllByText(/Donec in vestibulum elit/i);
      const imgElement = screen.getByAltText(benefit.altImg);

      expect(titleElement).toBeInTheDocument();
      expect(descriptionElements[index]).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src', benefit.srcImg);
    });

    if (benefit.hasLink) {
      it(`renders benefit item ${index + 1} with correct link`, () => {
        render(<BenefitsSection />);
        const linkElement = screen.getByText(benefit.textLink);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement.closest('a')).toHaveAttribute('href', benefit.href);
      });
    }
  });
});
