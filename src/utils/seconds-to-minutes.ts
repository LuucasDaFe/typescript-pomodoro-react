import { zeroLeft } from "./zero-left";

export function secondsToMinutes(seconds: number | null | undefined): string {
  if (seconds == null) {
    throw new Error("The seconds parameter must not be null or undefined.");
  }

  if (typeof seconds !== "number") {
    throw new Error("The seconds parameter must be a number.");
  }

  if (seconds < 0) {
    throw new Error("The seconds parameter must not be negative.");
  }

  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  return `${min}:${sec}`;
}
