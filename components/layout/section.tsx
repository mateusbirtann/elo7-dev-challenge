import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  dataTestId?: string;
};

export function Section({ children, className, dataTestId }: SectionProps) {
  return (
    <section
      className={cn('mx-auto max-w-mobile px-4 md:max-w-desktop md:px-14', className)}
      data-testid={dataTestId}
    >
      {children}
    </section>
  );
}
