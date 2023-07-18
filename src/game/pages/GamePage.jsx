import { useEffect, useState } from "react";
import { CardsBoard } from "../components";
import { useAudioControl } from "../hooks/useAudioControl";
import { useNavigate } from "react-router-dom";

export const GamePage = () => {
  const [countdown, setCountdown] = useState(30);
  const { muted, toggleMute } = useAudioControl();
  const navigate = useNavigate();

  let ticktockSound = new Audio(
    "../../../public/mixkit-tick-tock-clock-timer-1045.mp3"
  );

  useEffect(() => {
    const timer =
      countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);
    if (countdown === 10) {
      ticktockSound.play();
    }
    if (countdown === 0) {
      ticktockSound.pause();
      navigate("/summary", { state: { win: false } });
    }
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    //this screen will contain a memory game with 4 different cards and their pairs
    //the back of the card should contain a blue background with a yellow question mark vertically and horizontally aligned
    //there should be a mute/unmute button on the top right corner, unmuting the game should play the background sound
    <>
      <div className="col d-flex justify-content-between alig-items-center p-3">
        <h1 className="text-center m-2">Find the pair</h1>
        <button className="mute-btn" onClick={toggleMute}>
          {muted ? <span>🔇</span> : <span>🔊</span>}
        </button>
      </div>
      <div className="col d-flex justify-content-center alig-items-center p-3">
        <h3>Remaining time: {countdown} ⏰</h3>
      </div>

      <CardsBoard />
    </>
  );
};
