export function Header() {
  return (
    <section
      className="relative h-[259px] bg-header-mobile bg-cover bg-top md:h-[499px] md:bg-header-desktop"
      data-testid="header"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg md:text-[90px]">
          trabalhe no elo7
        </h1>
      </div>
    </section>
  );
}
