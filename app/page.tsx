import { Header } from '@/components/header';
import { HeroDescriptionSection } from '@/components/home/hero-description-section';
import { ReviewSection } from '@/components/home/review-section';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroDescriptionSection />
      <ReviewSection />
    </main>
  );
}
