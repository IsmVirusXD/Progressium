import { CSSProperties } from "react";
import { cardSize, undHeight, undWidth } from "../constants/cardSize";

export function getCardDimensions(
  minConfig: string,
  maxConfig: string,
): CSSProperties {
  let multiplier: number[];

  const minMultiplier = cardSize[minConfig];
  const maxMultiplier = cardSize[maxConfig];

  if (!minMultiplier || !maxMultiplier) return {};

  return {
    minWidth: `${minMultiplier[0] * undWidth}px`,
    minHeight: `${minMultiplier[1] * undHeight}px`,
    maxWidth: `${maxMultiplier[0] * undWidth}px`,
    maxHeight: `${maxMultiplier[1] * undHeight}px`,
  };
}
