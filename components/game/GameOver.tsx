interface GameOverProps {
  onReset: () => void;
}

export const GameOver = ({ onReset }: GameOverProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark overlay with fade in */}
      <div className="absolute inset-0 bg-black/40 animate-fade-in" />

      {/* Game Over Message */}
      <div
        className="animate-drop-in bg-[#E45C3A] rounded-2xl p-8 
        border-[6px] border-[#B52C1C] 
        shadow-[8px_8px_0px_#B52C1C]
        text-center space-y-4
        relative z-10"
      >
        <h2
          className="text-4xl font-black text-white
          [text-shadow:2px_2px_0px_#B52C1C]"
        >
          😢 GAME OVER 😢
        </h2>
        <p className="text-xl font-bold text-white/90">
          The word was:{" "}
          <span className="text-white font-black">
            {/* Add word reveal animation */}
            <span className="inline-block animate-reveal-letter">W</span>
            <span
              className="inline-block animate-reveal-letter"
              style={{ animationDelay: "0.1s" }}
            >
              O
            </span>
            <span
              className="inline-block animate-reveal-letter"
              style={{ animationDelay: "0.2s" }}
            >
              R
            </span>
            <span
              className="inline-block animate-reveal-letter"
              style={{ animationDelay: "0.3s" }}
            >
              L
            </span>
            <span
              className="inline-block animate-reveal-letter"
              style={{ animationDelay: "0.4s" }}
            >
              D
            </span>
          </span>
        </p>
        <button
          onClick={onReset}
          className="mt-4 w-full py-4 px-6 
            bg-[#FBD000] rounded-xl font-black text-[#B52C1C] text-xl
            shadow-[0px_6px_0px_#7A1805]
            transition-all duration-300 
            hover:translate-y-[-2px] hover:shadow-[0px_8px_0px_#7A1805]
            active:translate-y-[2px] active:shadow-[0px_4px_0px_#7A1805]"
        >
          Try Again! 🎮
        </button>
      </div>
    </div>
  );
};
