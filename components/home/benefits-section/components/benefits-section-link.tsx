import { Benefit } from "@/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BenefitsSectionLinkProps = {
  benefit: Benefit;
};

export function BenefitsSectionLink({ benefit }: BenefitsSectionLinkProps) {
  return (
    <>
      {benefit.hasLink && (
        <Link
          href={benefit.href}
          className="mt-9 flex items-center justify-center text-xl font-medium text-brand-teal"
        >
          {benefit.textLink}
          <ChevronRight size={24} className="text-brand-teal" />
        </Link>
      )}
    </>
  );
}