import React, { useEffect, useState, useCallback } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";
import { secondsToTime } from "../utils/seconds-to-time";

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.cycles - 1).fill(true)
  );

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  const bellStart = require("../sounds/src_sounds_bell-start.mp3");
  const bellFinish = require("../sounds/src_sounds_bell-finish.mp3");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const audioStartWorking = new Audio(bellStart);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const audioStopWorking = new Audio(bellFinish);

  useInterval(
    () => {
      if (mainTime > 0) setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting && mainTime > 0 ? 1000 : null
  );

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking?.play();
  }, [audioStartWorking, props.pomodoroTime]);

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }
      audioStopWorking?.play();
    },
    [audioStopWorking, props.longRestTime, props.shortRestTime]
  );

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");

    if (mainTime <= 0) {
      if (working && cyclesQtdManager.length > 0) {
        configureRest(false);
        setCyclesQtdManager(cyclesQtdManager.filter((v, i) => i !== 0));
      } else if (working && cyclesQtdManager.length <= 0) {
        configureRest(true);
        setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
        setCompletedCycles(completedCycles + 1);
      }

      if (resting) {
        configureWork();
      }

      if (working) {
        setNumberOfPomodoros(numberOfPomodoros + 1);
      }
    }
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    numberOfPomodoros,
    props.cycles,
    completedCycles,
    configureRest,
    setCyclesQtdManager,
    configureWork,
  ]);

  return (
    <div className="pomodoro">
      <h2>Você está {working ? "Trabalhando" : "Descansando"}</h2>
      <Timer mainTime={mainTime}></Timer>
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()}></Button>
        <Button text="Rest" onClick={() => configureRest(false)}></Button>
        <Button
          className={!working && !resting ? "hidden" : ""}
          text={timeCounting ? "Pause" : "Play"}
          onClick={() => setTimeCounting(!timeCounting)}
        ></Button>
      </div>

      <div className="details">
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>
    </div>
  );
}
