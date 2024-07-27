import { Header } from '@/components/header';
import { BenefitsSection } from '@/components/home/benefits-section';
import { HeroDescriptionSection } from '@/components/home/hero-description-section';
import { JobsList } from '@/components/home/jobs/page';
import { ReviewSection } from '@/components/home/review-section';
import { ServiceImageSection } from '@/components/home/service-image-section';
import { TeamSection } from '@/components/home/team-section';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroDescriptionSection />
      <ReviewSection />
      <TeamSection />
      <BenefitsSection />
      <ServiceImageSection />
      <JobsList />
    </main>
  );
}
