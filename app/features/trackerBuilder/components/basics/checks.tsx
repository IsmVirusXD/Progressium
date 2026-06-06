import {
  Circle,
  CircleCheckBig,
  CircleX,
  Square,
  SquareCheckBig,
  SquareX,
} from "lucide-react";
import { twJoin } from "tailwind-merge";

interface CheckProps {
  mode: "square" | "circle";
  isDone: boolean;
  isErro?: boolean;
  onClick?: () => void;
  cyId: string;
}

const ICON_MAP = {
  circle: { default: Circle, done: CircleCheckBig, error: CircleX },
  square: { default: Square, done: SquareCheckBig, error: SquareX },
};

export function Checker({
  mode,
  isDone,
  isErro = false,
  onClick,
  cyId,
}: CheckProps) {
  const isClickable: boolean = !isErro && !!onClick;

  const id = `${cyId}-${mode}-checker`;
  const iconStyle =
    "h-5 w-5" + isClickable ? "cursor-pointer" : "cursor-default";
  const colorStyle = isErro
    ? "text-muted"
    : isDone
      ? "text-done"
      : "text-secondary";

  const tailwindConfig: string = twJoin(iconStyle, colorStyle);

  const iconConfig = ICON_MAP[mode];
  const IconComponent = isErro
    ? iconConfig.error
    : isDone
      ? iconConfig.done
      : iconConfig.default;

  return (
    <button
      onClick={isClickable ? onClick : undefined}
      id={isErro ? `${id}-error` : id}
      disabled={!isClickable}
      className={tailwindConfig}
    >
      <IconComponent />
    </button>
  );
}
