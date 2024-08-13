import { Benefit } from "@/types"

type BenefitsSectionContentProps = {
  benefit: Benefit;
}

export function BenefitsSectinContent({ benefit }: BenefitsSectionContentProps) {
  return (
    <>
      <h3 className="my-6 text-2xl font-semibold text-brand-dark">{benefit.title}</h3>
      <p className="mt-2 text-xl text-brand-gray">{benefit.description}</p>
    </>
  )
}