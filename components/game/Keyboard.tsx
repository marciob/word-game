import { KeyboardProps } from "@/types/game";

const KEYBOARD_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
];

const stateStyles = {
  correct: "bg-[#6AAA64] text-white",
  present: "bg-[#C9B458] text-white",
  absent: "bg-gray-500 text-white",
};

export const Keyboard = ({
  onKeyPress,
  onEnter,
  onDelete,
  usedLetters,
}: KeyboardProps) => (
  <div className="flex flex-col gap-2">
    {KEYBOARD_ROWS.map((row, i) => (
      <div key={i} className="flex justify-center gap-1">
        {row.map((key) => {
          const isSpecialKey = key === "ENTER" || key === "DELETE";
          const letterState = usedLetters[key];

          return (
            <button
              key={key}
              onClick={() => {
                if (key === "ENTER") onEnter();
                else if (key === "DELETE") onDelete();
                else onKeyPress(key);
              }}
              className={`px-3 py-4 rounded font-bold text-sm
                ${isSpecialKey ? "px-4 text-xs" : "min-w-[2rem]"}
                ${letterState ? stateStyles[letterState] : "bg-gray-300"}
                transition-colors duration-300
                hover:opacity-90 active:scale-95`}
            >
              {key}
            </button>
          );
        })}
      </div>
    ))}
  </div>
);
