import Confetti from "react-confetti";
export const WinnerMessage = () => {
  return (
    <div>
      <Confetti />
      <h1>You did it!</h1>
      <span>🎆</span>
    </div>
  );
};
