import Image from 'next/image';

export function ServiceImageSection() {
  return (
    <>
      <Image
        src="/service-desktop.png"
        alt="Mãos de uma pessoa criando uma coroa de flores com fita e tesoura"
        className="hidden h-[385px] w-full object-cover sm:block"
        width={1440}
        height={385}
      />
      <Image
        src="/service-mobile.png"
        alt="Mãos de uma pessoa criando uma coroa de flores com fita e tesoura"
        className="h-[258px] w-full object-cover sm:hidden"
        width={360}
        height={258}
      />
    </>
  );
}
