const CONFETTI_COLORS = [
  "bg-red-500",
  "bg-yellow-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-pink-500",
];

export const Victory = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Confetti */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className={`absolute animate-confetti opacity-70
            w-3 h-3 rounded-full
            ${
              CONFETTI_COLORS[
                Math.floor(Math.random() * CONFETTI_COLORS.length)
              ]
            }
          `}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Victory Message */}
      <div
        className="animate-victory bg-[#FBD000] rounded-2xl p-8 
        border-[6px] border-[#B52C1C] 
        shadow-[8px_8px_0px_#B52C1C]
        text-center space-y-4
        relative z-10"
      >
        <h2
          className="text-4xl font-black text-[#B52C1C] 
          [text-shadow:2px_2px_0px_#7A1805]"
        >
          🎉 YOU WIN! 🎉
        </h2>
        <p className="text-xl font-bold text-[#B52C1C]">
          Congratulations! You've earned
        </p>
        <div
          className="text-3xl font-black text-[#B52C1C] 
          bg-white/20 rounded-full py-3 px-6
          [text-shadow:2px_2px_0px_#7A1805]"
        >
          2× WLD Coins! 🪙
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 w-full py-4 px-6 
            bg-[#E45C3A] rounded-xl font-black text-white text-xl
            shadow-[0px_6px_0px_#B52C1C]
            transition-all duration-300 
            hover:translate-y-[-2px] hover:shadow-[0px_8px_0px_#B52C1C]
            active:translate-y-[2px] active:shadow-[0px_4px_0px_#B52C1C]"
        >
          Play Again! 🎮
        </button>
      </div>
    </div>
  );
};
