import React from "react";
import { secondsToMinutes } from "../utils/seconds-to-minutes";

interface Props {
  mainTime: number;
}

export function Timer(propos: Props): JSX.Element {
  return <div className="timer">{secondsToMinutes(propos.mainTime)}</div>;
}
