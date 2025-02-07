"use client";

import { GuessRow } from "@/components/game/GuessRow";
import { GameTitle } from "@/components/ui/GameTitle";
import { Subtitle } from "@/components/ui/Subtitle";
import { useGameState } from "@/hooks/useGameState";
import { useEffect } from "react";
import { Victory } from "@/components/game/Victory";
import { GameOver } from "@/components/game/GameOver";
import { HowToPlay } from "@/components/ui/HowToPlay";

export default function Home() {
  const {
    gameState,
    startGame,
    updateGuess,
    submitGuess,
    deleteLastLetter,
    resetGame,
  } = useGameState();

  // Handle keyboard events
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (!gameState.isPlaying) return;

      if (event.key === "Enter") {
        submitGuess();
      } else if (event.key === "Backspace") {
        deleteLastLetter();
      } else if (/^[a-zA-Z]$/.test(event.key)) {
        updateGuess(event.key.toUpperCase());
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [gameState.isPlaying, submitGuess, deleteLastLetter, updateGuess]);

  return (
    <main className="min-h-screen bg-[#5C94FC] overflow-hidden relative px-4">
      <HowToPlay isPlaying={gameState.isPlaying} />
      {/* Decorative clouds */}
      <div className="absolute top-[10%] left-[10%] w-20 h-12 bg-white rounded-full opacity-80" />
      <div className="absolute top-[15%] right-[15%] w-24 h-14 bg-white rounded-full opacity-80" />
      <div className="absolute top-[5%] left-[40%] w-16 h-10 bg-white rounded-full opacity-80" />

      {/* Ground decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#7B4E35]">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#00B200] transform -translate-y-full" />
      </div>

      <div className="h-screen flex flex-col relative z-10">
        {/* Header */}
        <div className="pt-8 pb-4 relative z-10">
          <GameTitle />
          <Subtitle />
        </div>

        {/* Game Content */}
        <div className="flex-1 flex flex-col items-center relative z-10">
          {!gameState.isPlaying ? (
            <div className="flex-1 flex items-center justify-center -mt-20 relative z-10">
              <div
                className="text-center p-8 
                bg-[#FBD000] rounded-2xl w-full max-w-sm
                border-[6px] border-[#B52C1C] 
                shadow-[8px_8px_0px_#B52C1C]
                relative
                before:absolute before:top-2 before:left-2
                before:w-8 before:h-8 before:bg-white/30 before:rounded-full"
              >
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2
                      className="text-3xl font-black text-[#B52C1C] 
                      [text-shadow:2px_2px_0px_#7A1805]"
                    >
                      Ready to Play?
                    </h2>
                    <p className="text-lg text-[#B52C1C] font-bold">
                      1 WLD Coin to Start!
                    </p>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-[#E45C3A] blur-md transform translate-y-2 opacity-50" />
                    <button
                      onClick={startGame}
                      className="relative w-full py-5 px-6 
                        bg-[#E45C3A] rounded-xl font-black text-white text-xl
                        shadow-[0px_6px_0px_#B52C1C]
                        transition-all duration-300 
                        hover:translate-y-[-2px] hover:shadow-[0px_8px_0px_#B52C1C]
                        active:translate-y-[2px] active:shadow-[0px_4px_0px_#B52C1C]
                        before:absolute before:inset-0 before:bg-white/20 
                        before:rounded-xl before:h-1/2"
                    >
                      🎮 START GAME
                    </button>
                  </div>

                  <div
                    className="text-base font-black text-[#B52C1C] 
                    bg-white/20 rounded-full py-2 px-4 inline-block
                    [text-shadow:1px_1px_0px_#7A1805]"
                  >
                    Win 2× WLD Coins! 🏆
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="w-full max-w-sm space-y-3 mt-4 mb-6">
                {gameState.guesses.map((guess, index) => (
                  <GuessRow
                    key={index}
                    guess={
                      index === gameState.attempts
                        ? gameState.currentGuess
                        : guess
                    }
                    wordToGuess={gameState.wordToGuess}
                    isSubmitted={index < gameState.attempts}
                  />
                ))}
              </div>

              {/* Control Buttons */}
              <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-4 px-4">
                <button
                  onClick={deleteLastLetter}
                  className="w-16 h-16 bg-[#E45C3A] rounded-xl font-black text-white 
                    shadow-[0px_4px_0px_#B52C1C]
                    transition-all duration-300
                    active:translate-y-[2px] active:shadow-[0px_2px_0px_#B52C1C]
                    disabled:opacity-50"
                  disabled={gameState.currentGuess.length === 0}
                >
                  ⌫
                </button>
                <button
                  onClick={submitGuess}
                  className="flex-1 max-w-[200px] h-16 bg-[#6AAA64] rounded-xl font-black text-white 
                    shadow-[0px_4px_0px_#538D4E]
                    transition-all duration-300
                    active:translate-y-[2px] active:shadow-[0px_2px_0px_#538D4E]
                    disabled:opacity-50"
                  disabled={gameState.currentGuess.length !== 5}
                >
                  ENTER
                </button>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div
          className="py-4 text-center text-sm font-bold text-white
          [text-shadow:1px_1px_0px_#B52C1C]"
        >
          {/* Powered by World App */}
        </div>
      </div>

      {gameState.hasWon && <Victory />}
      {gameState.hasLost && <GameOver onReset={resetGame} />}
    </main>
  );
}
