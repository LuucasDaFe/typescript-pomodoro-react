import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button(propos: Props): JSX.Element {
  return (
    <button className={propos.className} onClick={propos.onClick}>
      {propos.text}
    </button>
  );
}
