"use client";

import { LetterBox } from "@/components/game/LetterBox";
import { LivesCounter } from "@/components/game/LivesCounter";
import { ScoreSection } from "@/components/game/ScoreSection";
import { GameTitle } from "@/components/ui/GameTitle";
import { Subtitle } from "@/components/ui/Subtitle";
import { useGameState } from "@/hooks/useGameState";

export default function Home() {
  const { gameState, startGame } = useGameState();

  const renderWord = () => {
    return gameState.wordToGuess
      .split("")
      .map((letter, index) => (
        <LetterBox
          key={index}
          letter={letter}
          isRevealed={gameState.guessedLetters.includes(letter)}
        />
      ));
  };

  return (
    <main className="min-h-screen bg-[#5C94FC] overflow-hidden relative px-4">
      {/* Decorative elements */}
      <div className="absolute top-[10%] left-[10%] w-20 h-12 bg-white rounded-full" />
      <div className="absolute top-[15%] right-[15%] w-24 h-14 bg-white rounded-full" />
      <div className="absolute top-[5%] left-[40%] w-16 h-10 bg-white rounded-full" />

      {/* Ground decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#7B4E35]">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#00B200] transform -translate-y-full" />
      </div>

      <div className="h-screen flex flex-col relative z-10">
        {/* Header */}
        <div className="pt-12 pb-6 relative">
          <GameTitle />
          <Subtitle />
        </div>

        {/* Game Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {!gameState.isPlaying ? (
            <div
              className="text-center space-y-6 p-8 
              bg-[#FBD000] rounded-2xl w-full max-w-sm
              border-4 border-[#B52C1C] shadow-[8px_8px_0px_#B52C1C]"
            >
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-[#B52C1C]">Ready?</h2>
                <p className="text-sm text-[#B52C1C] font-bold">
                  1 WLD Coin to Start!
                </p>
              </div>

              <button
                onClick={startGame}
                className="w-full py-4 px-6 
                  bg-[#E45C3A] rounded-xl font-black text-white 
                  shadow-[0px_6px_0px_#B52C1C]
                  transition-all duration-300 
                  hover:translate-y-[-2px] hover:shadow-[0px_8px_0px_#B52C1C]
                  active:translate-y-[2px] active:shadow-[0px_4px_0px_#B52C1C]"
              >
                🎮 START GAME
              </button>

              <div className="text-sm font-bold text-[#B52C1C]">
                Win 2× WLD Coins!
              </div>
            </div>
          ) : (
            <div className="w-full max-w-sm space-y-8">
              <LivesCounter
                current={gameState.maxAttempts - gameState.attempts}
                max={gameState.maxAttempts}
              />
              <div className="flex justify-center">{renderWord()}</div>
              <ScoreSection
                lives={gameState.maxAttempts - gameState.attempts}
              />

              <div className="mt-8 text-center">
                <span className="bg-white/90 rounded-full px-4 py-2 text-sm font-bold text-[#B52C1C]">
                  🎮 Keyboard Coming Soon!
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          className="py-6 text-center text-sm font-bold text-white
          [text-shadow:1px_1px_0px_#B52C1C]"
        >
          Powered by World App
        </div>
      </div>
    </main>
  );
}
