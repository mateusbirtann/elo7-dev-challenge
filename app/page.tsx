import { Header } from '@/components/header';
import { HeroDescriptionSection } from '@/components/home/hero-description-section';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroDescriptionSection />
    </main>
  );
}
