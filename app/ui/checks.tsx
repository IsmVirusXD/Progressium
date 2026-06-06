import {
  Circle,
  CircleCheckBig,
  CircleX,
  Square,
  SquareCheckBig,
  SquareX,
} from "lucide-react";

interface CheckProps {
  mode: "square" | "circle";
  isDone: boolean;
  isErro?: boolean;
  onClick: () => void;
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
  const id = `${cyId}-${mode}-checker`;
  const iconStyle = "h-5 w-5";
  const colorStyle = isErro
    ? "text-muted"
    : isDone
      ? "text-done"
      : "text-secondary";

  const tailwindConfig: string = [iconStyle, colorStyle].join(" ");

  const iconConfig = ICON_MAP[mode];
  const IconComponent = isErro
    ? iconConfig.error
    : isDone
      ? iconConfig.done
      : iconConfig.default;

  return (
    <button
      onClick={!isErro ? onClick : undefined}
      id={isErro ? `${id}-error` : id}
      disabled={isErro}
      className={tailwindConfig}
    >
      <IconComponent />
    </button>
  );
}
