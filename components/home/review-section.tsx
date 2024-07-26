import { Section } from '@/components/layout/section';
import Image from 'next/image';

export function ReviewSection() {
  return (
    <div className="w-full bg-[#F4F5F7]">
      <Section className="my-10 md:my-10" dataTestId="review-section">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <Image
            src="/review-desktop.png"
            alt="Uma pessoa sentada em uma bancada de madeira fabricando joias, com ferramentas, materiais e uma luminária na mesa, além de um smartphone por perto"
            className="hidden h-[264px] w-1/2 rounded-lg object-cover md:block"
            width={644}
            height={264}
            data-testid="review-section-desktop-img"
          />
          <Image
            src="/review-mobile.png"
            alt="Uma pessoa sentada em uma bancada de madeira fabricando joias, com ferramentas, materiais e uma luminária na mesa, além de um smartphone por perto"
            className="h-[264px] rounded-lg object-cover md:hidden"
            width={328}
            height={264}
            data-testid="review-section-mobile-img"
          />
          <div className="md:w-1/2">
            <div className="mb-6 flex flex-col gap-1">
              <h2 className="text-2xl font-bold text-brand-dark">Palavra da vendedora</h2>
              <p className="text-xl font-bold text-brand-orange-500">Sed rutrum condimentum</p>
            </div>
            <p className="text-brand-gray md:text-xl">
              Donec in vestibulum elit. Aliquam finibus facilisis elit, sit amet malesuada nibh
              tempor sed. Aliquam consequat ultrices fringilla. Sed id quam sollicitudin mi
              ultricies feugiat a vel velit. Pellentesque finibus vel tortor sed hendrerit.
              Vestibulum eu sem sapien. Nullam mollis, leo ut finibus euismod, arcu eros aliquam
              augue, in congue neque nulla vehicula purus.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
