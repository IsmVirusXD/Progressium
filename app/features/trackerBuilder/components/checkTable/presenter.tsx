import { ChevronDown, Minus, Square, SquareCheckBigIcon } from "lucide-react";
import { Fragment, ReactNode } from "react";
import { twJoin } from "tailwind-merge";
import { checkRow } from "../../interfaces/component";

interface CheckTableProps {
  idBase: string;
  title: string;
  info: string | null;
  isComplete: boolean;
  mapDone: Record<string, boolean>;
  maxRow: number;
  maxColumn: number;
  showInfo: boolean;
  data: checkRow[];
  changeInfoVisibility: () => void;
  toggleMapDone: (key: string) => void;
}

export function CheckTablePresenter({
  idBase,
  title,
  info,
  maxColumn,
  maxRow,
  mapDone,
  isComplete,
  showInfo,
  data,
  changeInfoVisibility,
  toggleMapDone,
}: CheckTableProps) {
  const Icon = showInfo ? Minus : ChevronDown;
  const iconColor = isComplete ? "text-done" : "text-primary";
  const gridConfig = ``;

  const generateComponentList = (size: number, row: number) => {
    const items = [];

    for (let i = 0; i < size; i++) {
      let index: string = `${row}:${i}`;
      items.push(
        <button
          key={idBase + index.toString()}
          onClick={() => {
            toggleMapDone(index);
          }}
          className={twJoin("grid m-0.5 ", `column-start-[${i}]`)}
        >
          {mapDone[index] ? (
            <>
              <SquareCheckBigIcon className={"text-done"} />
            </>
          ) : (
            <>
              <Square className={"text-secondary"} />
            </>
          )}
        </button>,
      );
    }

    return <div className="flex size-3 gap-2">{items}</div>;
  };

  return (
    <div
      className={twJoin(
        "flex m-5 border-2 w-fit px-4 py-2 shadow-md flex-col text-center",
        isComplete ? "border-done" : "border-primary",
      )}
    >
      <button
        id={idBase}
        className="flex flew-row gap-2 content-center"
        onClick={changeInfoVisibility}
      >
        {info &&
          (showInfo ? (
            <Minus className={twJoin("my-1.5", iconColor)} />
          ) : (
            <ChevronDown className={twJoin("my-1.5", iconColor)} />
          ))}
        {isComplete ? (
          <del className="font-heading text-2xl font-medium">{title}</del>
        ) : (
          <p className="font-heading text-2xl font-medium text-primary">
            {title}
          </p>
        )}
      </button>
      {showInfo && info ? (
        <div
          key={idBase + "-info"}
          className=" flex border my-2 p-2 text-primary border-primary font-body"
        >
          <h3
            className={twJoin(
              "my-1.5 ",
              isComplete ? "text-done" : "text-primary",
            )}
          >
            {info}
          </h3>
        </div>
      ) : null}
      <div
        key={idBase + "-table"}
        className="grid gap-0.5 my-2"
        style={{
          gridTemplateColumns: `max-content repeat(${maxColumn}, 24px)`,
        }}
      >
        {data.map((item, rowIndex) => (
          <Fragment key={`${item.label}`}>
            <h3 className="text-foreground font-heading mr-2 items-start">
              {item.label}:
            </h3>
            {Array.from({ length: maxColumn }).map((_, columnIndex) =>
              columnIndex < item.count ? (
                <button
                  key={`${idBase}-table-${rowIndex}:${columnIndex}`}
                  onClick={() => toggleMapDone(`${rowIndex}:${columnIndex}`)}
                >
                  {mapDone[`${rowIndex}:${columnIndex}`] ? (
                    <SquareCheckBigIcon className="text-done" />
                  ) : (
                    <Square className="text-secondary" />
                  )}
                </button>
              ) : (
                <span key={`${rowIndex}:${columnIndex}`} />
              ),
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
