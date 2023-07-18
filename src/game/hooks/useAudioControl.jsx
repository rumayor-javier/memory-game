import { useState } from "react";
import useSound from "use-sound";
import gameMusic from "../../assets/audio/mixkit-game-show-suspense-waiting-667.wav";
export const useAudioControl = () => {
  const [muted, setMuted] = useState(true);
  const [play, { stop }] = useSound(gameMusic, {
    volume: 0.5,
  });
  const toggleMute = () => {
    if (muted) {
      play();
      setMuted(false);
    } else {
      stop();
      setMuted(true);
    }
  };

  return { muted, toggleMute };
};
