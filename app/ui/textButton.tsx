import { twJoin } from "tailwind-merge";
import { typography } from "../styles/fonts/typografy";

interface TextButtonProps {
  text: string;
  activate: boolean;
  onClick: () => void;
  size: "medium" | "small";
  type: "confirm" | "cancel" | "text";
  cyId: string;
}

const COLOR_MAP = {
  confirm:
    "text-done border border-done hover:border-0 hover:bg-done hover:text-background",
  cancel:
    "text-secondary border border-secondary hover:border-0 hover:bg-secondary hover:text-background",
  text: "text-primary border border-primary hover:border-0 hover:bg-primary hover:text-background",
  deactivate: "border-0 bg-muted text-background opacity-30",
};

const SIZE_MAP = {
  medium: "w-40 h-9",
  small: "w-28 h-9",
};

export function TextButton({
  text,
  activate,
  onClick,
  size,
  type,
  cyId,
}: TextButtonProps) {
  const id = `${cyId}-text-button`;
  const baseStyle = "h-9 border text-center rounded-md";

  const tailwindConfig: string = [
    SIZE_MAP[size],
    baseStyle,
    typography.button,
  ].join(" ");

  return (
    <button
      className={twJoin(
        tailwindConfig,
        activate ? COLOR_MAP[type] : COLOR_MAP["deactivate"],
      )}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
}
