import { ChevronRight } from 'lucide-react';
import { Section } from '@/components/layout/section';
import Link from 'next/link';
import { benefits } from '@/constants/benefits';

export function BenefitsSection() {
  return (
    <div className="w-full bg-[#fdf4e3]">
      <Section
        className="my-10 flex flex-col items-center justify-center gap-10 md:my-20 md:gap-4 lg:flex-row"
        dataTestId="benefits-section"
      >
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="mb-auto flex max-w-xs flex-col text-center lg:max-w-[432px]"
            data-testid="benefits-section-item"
          >
            <div className="mb-4 flex justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-brand-orange-400">
                <img src={benefit.srcImg} alt={benefit.altImg} className="h-32 w-32" />
              </div>
            </div>
            <h3 className="my-6 text-2xl font-semibold text-brand-dark">{benefit.title}</h3>
            <p className="mt-2 text-xl text-brand-gray">{benefit.description}</p>
            {benefit.hasLink && (
              <Link
                href={benefit.href}
                className="mt-9 flex items-center justify-center text-xl font-medium text-brand-teal"
              >
                {benefit.textLink}
                <ChevronRight size={24} className="text-brand-teal" />
              </Link>
            )}
          </div>
        ))}
      </Section>
    </div>
  );
}
