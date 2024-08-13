import { Benefit } from "@/types";

type BenefitsSectionImgProps = {
  benefit: Benefit;
}

export function BenefitsSectionImg({ benefit }: BenefitsSectionImgProps) {
  return (
    <div className="mb-4 flex justify-center">
      <div className="flex h-48 w-48 items-center justify-center rounded-full bg-brand-orange-400">
        <img src={benefit.srcImg} alt={benefit.altImg} className="h-32 w-32" />
      </div>
    </div>
  )
}