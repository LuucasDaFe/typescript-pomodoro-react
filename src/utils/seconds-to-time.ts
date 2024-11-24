import { zeroLeft } from "./zero-left";

/**
 * Converts a given number of seconds into a time string in the format
 * hours:minutes:seconds.
 *
 * @param {number} totalSeconds The number of seconds to convert.
 * @returns {string} The time string.
 */
export function secondsToTime(totalSeconds: number): string {
  if (totalSeconds === null || totalSeconds === undefined) {
    throw new Error(
      "The totalSeconds parameter must not be null or undefined."
    );
  }

  const hours = zeroLeft(totalSeconds / 3600);
  const minutes = zeroLeft((totalSeconds / 60) % 60);
  const seconds = zeroLeft(totalSeconds % 60);
  return `${hours}:${minutes}:${seconds}`;
}
