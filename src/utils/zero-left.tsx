export const zeroLeft = (num: number | null | undefined): string => {
  if (num == null) {
    throw new Error("The input number must not be null or undefined.");
  }
  return Math.floor(num).toString().padStart(2, "0");
};
