import { LetterBoxProps } from "@/types/game";

export const LetterBox = ({ letter, isRevealed }: LetterBoxProps) => (
  <div
    className="w-14 h-14 relative border-b-[6px] border-[#E45C3A] mx-1.5 
    flex items-center justify-center text-2xl font-bold 
    bg-[#FBD000] text-[#B52C1C] rounded-xl 
    shadow-[4px_4px_0px_#B52C1C]
    transition-all duration-300 
    hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#B52C1C]
    active:translate-y-[2px] active:shadow-[2px_2px_0px_#B52C1C]"
  >
    {isRevealed ? letter : ""}
    <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#FEE55B] rounded-full shadow-inner" />
  </div>
);
