import { Circle, CircleCheckBig } from "lucide-react";
import { twJoin } from "tailwind-merge";

interface TextListPresenterProps {
  idBase: string;
  title: string;
  items: string[];
  isListComplete: boolean;
  handleClickItem: (index: number) => void;
  checkIsItemDoneIndex: (index: number) => boolean;
}

export default function TextListPresenter({
  idBase,
  title,
  items,
  isListComplete,
  handleClickItem,
  checkIsItemDoneIndex,
}: TextListPresenterProps) {
  const iconColor = isListComplete ? "text-done" : "text-primary";

  return (
    <div
      id={`${idBase}`}
      key={`${idBase}`}
      className={twJoin(
        "flex m-5 border-2 w-fit px-4 py-2 shadow-md flex-col text-center",
        isListComplete ? "border-done" : "border-primary",
      )}
    >
      <div
        id={`${idBase}-header`}
        key={`${idBase}-header`}
        className="flex flew-row gap-2 content-center"
      >
        {isListComplete ? (
          <del className="font-heading text-2xl font-medium">{title}</del>
        ) : (
          <p className="font-heading text-2xl font-medium text-primary">
            {title}
          </p>
        )}
      </div>
      {items.map((item: string, index: number) => (
        <button
          id={`${idBase}-${index}`}
          key={`${idBase}-${index}`}
          onClick={() => {
            handleClickItem(index);
          }}
          className="flex flex-row gap-2 ml-3 my-2"
        >
          {checkIsItemDoneIndex(index) ? (
            <>
              <CircleCheckBig className={"text-done"} />
              <del className={"text-done"}>{item}</del>
            </>
          ) : (
            <>
              <Circle className={"text-secondary"} />
              <p className={"text-foreground font-heading"}>{item}</p>
            </>
          )}
        </button>
      ))}
    </div>
  );
}
