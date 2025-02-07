import { LivesCounterProps } from "@/types/game";

export const LivesCounter = ({ current, max }: LivesCounterProps) => (
  <div className="flex justify-center gap-2">
    {[...Array(current)].map((_, i) => (
      <div
        key={i}
        className="w-8 h-8 bg-[#E45C3A] rounded-full
          border-2 border-[#B52C1C] animate-pulse"
      >
        <span className="text-lg">❤️</span>
      </div>
    ))}
  </div>
);
