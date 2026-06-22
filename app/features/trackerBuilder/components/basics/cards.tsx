import { typography } from "@/app/styles/fonts/typografy";
import { ReactNode } from "react";
import { getCardDimensions } from "../../functions/getCardDimensions";
import { twJoin } from "tailwind-merge";

interface CardProps {
  children: ReactNode[] | ReactNode;
  title: string;
  sizeMin: string;
  sizeMax: string;
  isDone: boolean;
  cyId: string;
}

export function Card({
  children,
  title,
  sizeMin,
  sizeMax,
  isDone,
  cyId,
}: CardProps) {
  const id = `${cyId}-card`;

  const colorStyle = isDone
    ? "text-done border-done scrollbar-thumb-done"
    : "text-primary border-primary scrollbar-thumb-primary";

  const cardConfig =
    "flex flex-col bg-transparent border-2 gap-3 p-2.5 overflow-hidden";

  const bodyConfig =
    "flex flex-col w-full h-full bg-transparent gap-2.5 scroll-smooth scrollbar-auto overflow-y-auto pr-4";

  const cardSize = getCardDimensions(sizeMin, sizeMax);

  const tailwindTitle = twJoin(typography.compTitle, colorStyle);
  const tailwindCard = twJoin(cardConfig, colorStyle);
  const tailwindBody = twJoin(bodyConfig, colorStyle);
  return (
    <div id={id} className={tailwindCard} style={cardSize}>
      {isDone ? (
        <del>
          <p className={tailwindTitle}>{title}</p>
        </del>
      ) : (
        <p className={tailwindTitle}>{title}</p>
      )}
      <div className={tailwindBody}>{children}</div>
    </div>
  );
}
