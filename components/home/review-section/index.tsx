import { Section } from '@/components/layout/section';
import { ReviewSectionImg } from './review-section-img';
import { ReviewSectionContent } from './review-section-content';

export function ReviewSection() {
  return (
    <div className="w-full bg-[#F4F5F7]">
      <Section className="my-10 md:my-10" dataTestId="review-section">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <ReviewSectionImg />
          <ReviewSectionContent />
        </div>
      </Section>
    </div>
  );
}
