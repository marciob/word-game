import { useState } from "react";
import { GameState } from "@/types/game";

const INITIAL_STATE: GameState = {
  isPlaying: false,
  attempts: 0,
  maxAttempts: 6,
  currentGuess: "",
  guesses: ["", "", "", "", "", ""], // 6 empty guesses
  wordToGuess: "WORLD",
  hasWon: false,
};

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);

  const startGame = () => {
    setGameState((prev) => ({
      ...prev,
      isPlaying: true,
    }));
  };

  const updateGuess = (letter: string) => {
    if (gameState.currentGuess.length >= 5) return;
    setGameState((prev) => ({
      ...prev,
      currentGuess: prev.currentGuess + letter,
    }));
  };

  const submitGuess = () => {
    if (gameState.currentGuess.length !== 5) return;

    const newGuesses = [...gameState.guesses];
    newGuesses[gameState.attempts] = gameState.currentGuess;

    const isCorrect = gameState.currentGuess === gameState.wordToGuess;

    setGameState((prev) => ({
      ...prev,
      guesses: newGuesses,
      attempts: prev.attempts + 1,
      currentGuess: "",
      hasWon: isCorrect,
    }));
  };

  const deleteLastLetter = () => {
    setGameState((prev) => ({
      ...prev,
      currentGuess: prev.currentGuess.slice(0, -1),
    }));
  };

  return {
    gameState,
    startGame,
    updateGuess,
    submitGuess,
    deleteLastLetter,
  };
};
