import { LetterBoxProps } from "@/types/game";

const stateStyles = {
  empty: "bg-[#FBD000] border-[#B52C1C] shadow-[inset_-3px_-3px_0px_#B52C1C]",
  absent:
    "bg-[#808080] border-[#4A4A4A] text-white shadow-[inset_-3px_-3px_0px_#4A4A4A]",
  present:
    "bg-[#FFA500] border-[#CC8400] text-white shadow-[inset_-3px_-3px_0px_#CC8400]",
  correct:
    "bg-[#6AAA64] border-[#538D4E] text-white shadow-[inset_-3px_-3px_0px_#538D4E]",
};

export const LetterBox = ({ letter, state }: LetterBoxProps) => (
  <div
    className={`w-16 h-16 relative border-4 mx-1 
    flex items-center justify-center text-3xl font-black 
    rounded-xl transition-all duration-300
    transform hover:scale-105
    ${stateStyles[state]}
    before:absolute before:top-1 before:left-1
    before:w-4 before:h-4 before:bg-white/30 before:rounded-full
    `}
  >
    <span
      className={`
      ${letter ? "animate-pop-in" : ""}
      ${state !== "empty" ? "animate-flip" : ""}
    `}
    >
      {letter}
    </span>
  </div>
);
