import { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../../models/Colors";
import { Player } from "../../models/Player";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const cb =
      currentPlayer?.color === Colors.BLACK
        ? decrementBlackTime
        : decrementWhiteTime;
    timer.current = setInterval(cb, 1000);
  };

  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  const decrementBlackTime = () => {
    setBlackTime((time) => time - 1);
  };

  const decrementWhiteTime = () => {
    setWhiteTime((time) => time - 1);
  };

  return (
    <div className="timer">
      <div>
        <button onClick={handleRestart}>Restart</button>
      </div>
      <h2>Черные: {blackTime}</h2>
      <h2>Белые: {whiteTime}</h2>
    </div>
  );
};

export default Timer;
