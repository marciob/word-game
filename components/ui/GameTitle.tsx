export const GameTitle = () => (
  <h1 className="relative">
    <span
      className="block text-5xl font-black text-center 
      [text-shadow:0_0_10px_rgba(255,255,255,0.5)]
      bg-gradient-to-b from-[#FFE259] via-[#FFA751] to-[#FF7B47]
      text-transparent bg-clip-text
      animate-bounce-slow
      tracking-wider"
    >
      WORD QUEST
    </span>
    {/* Decorative elements */}
    <span className="absolute -top-4 right-[30%] text-2xl transform rotate-12">
      ⭐
    </span>
    <span className="absolute -top-2 left-[25%] text-xl transform -rotate-12">
      🌟
    </span>

    {/* 3D effect layers */}
    <span
      className="absolute inset-0 block text-5xl font-black text-center tracking-wider
      text-[#B52C1C] translate-y-[2px] translate-x-[2px]
      [text-shadow:2px_2px_0px_#7A1805]"
      aria-hidden="true"
    >
      WORD QUEST
    </span>
    <span
      className="absolute inset-0 block text-5xl font-black text-center tracking-wider
      text-[#E45C3A] translate-y-[1px] translate-x-[1px]"
      aria-hidden="true"
    >
      WORD QUEST
    </span>
  </h1>
);
