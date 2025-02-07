import { useState } from "react";

interface HowToPlayProps {
  isPlaying: boolean;
}

export const HowToPlay = ({ isPlaying }: HowToPlayProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Only render the button if not playing
  if (isPlaying) return null;

  return (
    <>
      {/* How to Play Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute left-1/2 -translate-x-1/2 top-52
          bg-[#FBD000] 
          px-6 py-2.5 rounded-full
          font-black text-[#B52C1C] text-sm
          border-4 border-[#B52C1C]
          shadow-[0px_4px_0px_#B52C1C]
          transition-all duration-300
          hover:translate-y-[-2px] hover:shadow-[0px_6px_0px_#B52C1C]
          active:translate-y-[2px] active:shadow-[0px_2px_0px_#B52C1C]
          whitespace-nowrap
          z-20"
      >
        ❓ How to Play
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Content */}
          <div
            className="animate-drop-in bg-gradient-to-br from-[#5B7CE3] to-[#4663C7] rounded-2xl p-6 
            border-[6px] border-[#2C448C] 
            shadow-[8px_8px_0px_#1C2C66]
            relative z-10 w-full max-w-sm
            text-white"
          >
            <h2
              className="text-xl font-black mb-4 
              [text-shadow:2px_2px_0px_#1C2C66]"
            >
              How to Play 🎮
            </h2>

            <div className="space-y-4 text-left">
              <p className="font-bold text-center">
                Guess the WORD in 6 tries and win WLD coins! 🪙
              </p>

              {/* Example Tiles */}
              <div
                className="bg-[#2C448C]/30 backdrop-blur-sm rounded-xl p-3 space-y-2 
                border-2 border-white/20"
              >
                <p className="font-bold text-sm">Examples:</p>
                <div>
                  <div className="flex justify-center gap-1.5 mb-1">
                    <div className="w-10 h-10 bg-[#6AAA64] rounded-lg border-2 border-[#538D4E] flex items-center justify-center font-bold text-white text-sm">
                      W
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      O
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      R
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      D
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      S
                    </div>
                  </div>
                  <p className="text-xs font-bold">
                    <span className="text-[#6AAA64]">W</span> is in the word and
                    in the correct spot!
                  </p>
                </div>

                <div>
                  <div className="flex justify-center gap-1.5 mb-1">
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      P
                    </div>
                    <div className="w-10 h-10 bg-[#FFA500] rounded-lg border-2 border-[#CC8400] flex items-center justify-center font-bold text-white text-sm">
                      I
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      L
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      O
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      T
                    </div>
                  </div>
                  <p className="text-xs font-bold">
                    <span className="text-[#FFA500]">I</span> is in the word but
                    in the wrong spot!
                  </p>
                </div>

                <div>
                  <div className="flex justify-center gap-1.5 mb-1">
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      V
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      A
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      G
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      U
                    </div>
                    <div className="w-10 h-10 bg-[#808080] rounded-lg border-2 border-[#666666] flex items-center justify-center font-bold text-white text-sm">
                      E
                    </div>
                  </div>
                  <p className="text-xs font-bold">
                    None of these letters are in the word!
                  </p>
                </div>
              </div>

              {/* Rules */}
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <p className="font-bold text-sm">Rules:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2 text-sm text-white/90">
                    <li>Each guess must be a valid 5-letter word</li>
                    <li>
                      The color of the tiles will change to show how close your
                      guess was
                    </li>
                    <li>You have 6 attempts to guess the word</li>
                    <li>A new word will be available each day</li>
                  </ul>
                </div>

                <div
                  className="bg-[#FFB347] rounded-xl p-3 
                  border-4 border-[#FF9314]
                  shadow-[4px_4px_0px_#CC7A19]"
                >
                  <p
                    className="font-black text-center text-sm text-[#B52C1C]
                    [text-shadow:1px_1px_0px_#7A1805]"
                  >
                    Win the game to earn 2× WLD Coins! 🏆
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-2.5 px-6 
                bg-[#FFB347] rounded-xl font-black text-[#B52C1C] text-sm
                border-4 border-[#FF9314]
                shadow-[0px_4px_0px_#CC7A19]
                transition-all duration-300 
                hover:translate-y-[-2px] hover:shadow-[0px_6px_0px_#CC7A19]
                active:translate-y-[2px] active:shadow-[0px_2px_0px_#CC7A19]"
            >
              Got it! 👍
            </button>
          </div>
        </div>
      )}
    </>
  );
};
