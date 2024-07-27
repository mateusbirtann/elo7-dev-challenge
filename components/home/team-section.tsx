import { Section } from '@/components/layout/section';
import Image from 'next/image';
import { teamMembers } from '@/constants/team-members';

export function TeamSection() {
  return (
    <Section className="my-10 md:my-20" dataTestId="team-section">
      <h2 className="mb-8 text-center text-3xl font-bold">Conheça nosso time fora de série</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 min-[1440px]:flex min-[1440px]:flex-row">
        {teamMembers.map((member, index) => (
          <Image
            key={index}
            src={member.src}
            alt={member.alt}
            className="h-[183px] w-[320px] rounded-lg object-cover"
            width={320}
            height={183}
          />
        ))}
      </div>
    </Section>
  );
}
