"use client";

import { useMemo, useState } from "react";
import TextListPresenter from "./presenter";
import { TextListProps } from "../../interfaces/component";

export default function TextList({ title, info, items }: TextListProps) {
  const idBase = title.toLocaleLowerCase().replace(/\s+/g, "");

  const [itemDone, setItemDone] = useState<boolean[]>(
    new Array(items.length).fill(false),
  );
  const isListComplete = useMemo(() => itemDone.every(Boolean), [itemDone]);

  const toggleItemDoneIndex = (index: number) => {
    const newState = [...itemDone];
    newState[index] = !newState[index];
    setItemDone(newState);
  };

  const checkIsItemDoneIndex = (index: number): boolean => {
    return itemDone[index];
  };

  return (
    <TextListPresenter
      idBase={idBase}
      title={title}
      items={items}
      isListComplete={isListComplete}
      handleClickItem={toggleItemDoneIndex}
      checkIsItemDoneIndex={checkIsItemDoneIndex}
    />
  );
}
