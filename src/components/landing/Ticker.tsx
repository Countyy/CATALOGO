const items = [
  "48.000 exemplares distribuídos",
  "24 meses no campo",
  "Catálogo na mão de cada vendedor",
  "Sua marca no ponto de decisão",
  "Distribuidora São Roque",
  "3 formatos de anúncio disponíveis",
  "Página inteira · Meia página · 1/4 de página",
  "Visibilidade onde o varejista compra",
];

export function Ticker() {
  const list = [...items, ...items];
  return (
    <div className="bg-brand-red overflow-hidden py-5 border-y border-black/20">
      <div className="flex animate-ticker whitespace-nowrap">
        {list.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8 shrink-0">
            <span className="font-condensed font-bold uppercase tracking-[2px] text-white text-lg">
              {item}
            </span>
            <span className="text-white/70 text-xl rotate-45 inline-block">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
