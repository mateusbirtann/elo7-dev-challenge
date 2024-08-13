import Image from 'next/image'

export function ReviewSectionImg() {
  return (
    <>
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
    </>
  )
}