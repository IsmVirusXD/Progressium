import { twJoin } from "tailwind-merge";
import { typography } from "../styles/fonts/typografy";

interface TextButtonProps {
  text: string;
  activate?: boolean;
  onClick: () => void;
  size: "large" | "medium" | "small" | "full";
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
  large: "w-60 h-9",
  medium: "w-40 h-9",
  small: "w-28 h-9",
  full: "w-full h-full",
};

export function TextButton({
  text,
  activate = true,
  onClick,
  size,
  type,
  cyId,
}: TextButtonProps) {
  const id = `${cyId}-text-button`;
  const baseStyle = "h-9 border text-center rounded-md";

  const tailwindConfig: string = twJoin(
    SIZE_MAP[size],
    baseStyle,
    typography.button,
    activate
      ? `${COLOR_MAP[type]} cursor-pointer`
      : `${COLOR_MAP["deactivate"]} cursor-default`,
  );

  return (
    <button
      className={tailwindConfig}
      onClick={onClick}
      id={id}
      disabled={!activate}
    >
      {text}
    </button>
  );
}
