import { useLocation, useNavigate } from "react-router-dom";
import { WinnerMessage } from "../components/WinnerMessage";
import "animate.css";
export const SummaryPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  let cheersSound = new Audio(
    "../../../public/mixkit-small-group-cheer-and-applause-518.mp3"
  );

  let gameoverSound = new Audio(
    "../../../public/mixkit-sad-game-over-trombone-471.mp3"
  );

  if (state?.win) {
    cheersSound.play();
  } else {
    gameoverSound.play();
  }

  const playAgain = () => {
    state?.win ? cheersSound.pause() : gameoverSound.pause();
    navigate("/game");
  };

  return (
    <div className="container text-center mt-5 p-3">
      {state?.win ? (
        <WinnerMessage />
      ) : (
        <div>
          <h1>Oops you didn’t find them all</h1>
          <span>😞</span>
        </div>
      )}

      <button
        className="btn btn-primary mt-5 play-again-btn"
        onClick={playAgain}
      >
        Play again
      </button>
    </div>
  );
};
