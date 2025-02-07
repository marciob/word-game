import { useState } from "react";
import { GameState } from "@/types/game";

const INITIAL_STATE: GameState = {
  isPlaying: false,
  attempts: 0,
  maxAttempts: 6,
  currentWord: "",
  guessedLetters: [],
  wordToGuess: "MARIO",
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

  const startGame = () => {
    setGameState((prev) => ({
      ...prev,
      isPlaying: true,
    }));
  };

  const resetGame = () => {
    setGameState(INITIAL_STATE);
  };

  return {
    gameState,
    startGame,
    resetGame,
  };
};
