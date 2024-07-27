import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TeamSection } from '@/components/home/team-section';

describe('Team Section component', () => {
  it('renders the Section with correct class names', () => {
    render(<TeamSection />);
    const sectionElement = screen.getByTestId('team-section');

    expect(sectionElement).toHaveClass('my-10');
  });

  it('renders the correct title', () => {
    render(<TeamSection />);
    const titleElement = screen.getByText(/Conheça nosso time fora de série/i);

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the correct amount of team members', () => {
    render(<TeamSection />);
    const teamMembers = screen.getAllByRole('img');

    expect(teamMembers).toHaveLength(4);
  });
});
