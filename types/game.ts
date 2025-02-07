export interface GameState {
  isPlaying: boolean;
  attempts: number;
  maxAttempts: number;
  currentGuess: string;
  guesses: string[];
  wordToGuess: string;
}

export interface LetterBoxProps {
  letter: string;
  state: "correct" | "present" | "absent" | "empty";
}

export interface LivesCounterProps {
  current: number;
  max: number;
}

export interface ScoreSectionProps {
  lives: number;
}

export interface GuessRowProps {
  guess: string;
  wordToGuess: string;
  isSubmitted: boolean;
}

export interface KeyboardProps {
  onKeyPress: (key: string) => void;
  onEnter: () => void;
  onDelete: () => void;
  usedLetters: {
    [key: string]: "correct" | "present" | "absent";
  };
}
