import { Section } from '@/components/layout/section';
import { BenefitsSectionList } from './components/benefits-section-list';

export function BenefitsSection() {
  return (
    <div className="w-full bg-[#fdf4e3]">
      <Section
        className="my-10 flex flex-col items-center justify-center gap-10 md:my-20 md:gap-4 lg:flex-row"
        dataTestId="benefits-section"
      >
        <BenefitsSectionList />
      </Section>
    </div>
  );
}
