import { benefits } from "@/constants/benefits";
import { BenefitsSectionImg } from "./benefits-section-img";
import { BenefitsSectionLink } from "./benefits-section-link";
import { BenefitsSectinContent } from "./benefits-section-content";

export function BenefitsSectionList() {
  return (
    <>
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="mb-auto flex max-w-xs flex-col text-center lg:max-w-[432px]"
          data-testid="benefits-section-item"
        >
          <BenefitsSectionImg benefit={benefit} />
          <BenefitsSectinContent benefit={benefit} />
          <BenefitsSectionLink benefit={benefit} />
        </div>
      ))}
    </>
  )
}