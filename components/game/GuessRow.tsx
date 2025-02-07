import { GuessRowProps } from "@/types/game";
import { LetterBox } from "./LetterBox";

export const GuessRow = ({
  guess,
  wordToGuess,
  isSubmitted,
}: GuessRowProps) => {
  const getLetterState = (letter: string, index: number) => {
    if (!isSubmitted) return "empty";
    if (!letter) return "empty";
    if (letter === wordToGuess[index]) return "correct";
    if (wordToGuess.includes(letter)) return "present";
    return "absent";
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <LetterBox
          key={i}
          letter={guess?.[i] || ""}
          state={getLetterState(guess?.[i] || "", i)}
        />
      ))}
    </div>
  );
};
