"use client";

import { typography } from "@/app/styles/fonts/typografy";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { twJoin } from "tailwind-merge";

interface CounterProps {
  start: number;
  end: number;
  step?: number;
  cyId: string;
}

const COLOR_MAP = {
  empty: "text-secondary border-secondary",
  value: "text-primary border-primary",
  complete: "text-done border-done",
  button_add:
    "hover:bg-done border-0 hover:text-background text-done rounded-full",
  button_sub:
    "hover:bg-secondary border-0 hover:text-background text-secondary rounded-full",
  button_deactivate:
    "text-background bg-muted opacity-30 border-0 rounded-full",
};

type CounterStatus = keyof typeof COLOR_MAP;

export function Counter({ start, end, step = 1, cyId }: CounterProps) {
  const id = `${cyId}-counter`;

  const [value, setValue] = useState<number>(start);

  const status = useMemo<CounterStatus>(() => {
    if (value === start) {
      return "empty";
    } else if (value === end) {
      return "complete";
    }
    return "value";
  }, [value]);

  const addValue = () => setValue((prev) => Math.min(end, prev + step));
  const subValue = () => setValue((prev) => Math.max(start, prev - step));

  const isMinReached = value === start;
  const isMaxReached = value === end;

  return (
    <div className="flex flex-row items-center justify-center gap-1.5">
      <button
        id={`${id}-sub-button`}
        disabled={isMinReached}
        onClick={subValue}
        className={twJoin(
          isMinReached
            ? COLOR_MAP["button_deactivate"]
            : COLOR_MAP["button_sub"],
        )}
      >
        <MinusCircle />
      </button>
      <div
        className={twJoin(
          COLOR_MAP[status],
          "flex border py-1.5 px-0.5 h-6 w-20 items-center justify-center rounded-md",
        )}
      >
        <p className={typography.compNumber}>{`${value} / ${end}`}</p>
      </div>
      <button
        id={`${id}-add-button`}
        disabled={isMaxReached}
        onClick={addValue}
        className={twJoin(
          isMaxReached
            ? COLOR_MAP["button_deactivate"]
            : COLOR_MAP["button_add"],
        )}
      >
        <PlusCircle />
      </button>
    </div>
  );
}
