import balyCan from "@/assets/baly-tropical.png";

type Props = { className?: string; variant?: "tradicional" | "tropical" };

/** Baly can image */
export function CanPlaceholder({ className }: Props) {
  return (
    <div className={className} style={{ width: 440, height: 920 }}>
      <img
        src={balyCan}
        alt="Lata Baly Energy Drink Tropical 473ml"
        className="w-full h-full object-contain drop-shadow-2xl"
        loading="lazy"
      />
    </div>
  );
}
