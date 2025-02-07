import { ScoreSectionProps } from "@/types/game";

export const ScoreSection = ({ lives }: ScoreSectionProps) => (
  <div
    className="bg-[#FBD000] rounded-xl p-4 border-4 border-[#B52C1C]
    shadow-[4px_4px_0px_#B52C1C]"
  >
    <div className="text-center space-y-1">
      <p className="text-sm font-bold text-[#B52C1C]">Lives Left</p>
      <p className="text-3xl font-black text-[#B52C1C]">{lives}</p>
    </div>
  </div>
);
