import { Section } from '@/components/layout/section';
import { Separator } from '@/components/ui/separator';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function HeroDescriptionSection() {
  return (
    <Section dataTestId="hero-description-section" className="mb-10 mt-8">
      <article className="flex flex-col gap-6">
        <p className="text-center font-medium text-brand-dark md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et viverra orci.
          Praesent consequat dolor tellus, eget viverra risus hendrerit non. Sed rutrum condimentum
          maximus. Donec pellentesque libero eu eros sagittis.
        </p>
        <Separator color="#C8C8CC" />
        <Link
          href="https://elo7.gupy.io/"
          className="flex items-center justify-center text-xl font-medium text-[#008B90]"
        >
          vagas em aberto
          <ChevronRight size={24} className="text-brand-teal" />
        </Link>
      </article>
    </Section>
  );
}
