export interface GameState {
  isPlaying: boolean;
  attempts: number;
  maxAttempts: number;
  currentWord: string;
  guessedLetters: string[];
  wordToGuess: string;
}

export interface LetterBoxProps {
  letter: string;
  isRevealed: boolean;
}

export interface LivesCounterProps {
  current: number;
  max: number;
}

export interface ScoreSectionProps {
  lives: number;
}
