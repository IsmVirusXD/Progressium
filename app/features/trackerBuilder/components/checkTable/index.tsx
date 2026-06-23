"use client";

import { useMemo, useState } from "react";
import { CheckTablePresenter } from "./presenter";
import generateCheckTable from "../../functions/generateTable";
import { CheckTableProps } from "../../interfaces/component";

export function CheckTable({ title, info, data }: CheckTableProps) {
  const idBase = title.toLocaleLowerCase().replace(/\s+/g, "");

  const { tableMap, maxColumn, maxRow } = generateCheckTable(data);

  const [mapDone, setMapDone] = useState<Record<string, boolean>>(
    () => tableMap,
  );

  const toggleMapDone = (key: string) => {
    setMapDone((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isTableComplete = useMemo<boolean>(
    () => Object.values(mapDone).every((item) => item),
    [mapDone],
  );

  const [showInfo, setShowInfo] = useState<boolean>(false);

  const changeInfoVisibility = () => {
    setShowInfo(!showInfo);
  };

  return (
    <CheckTablePresenter
      idBase={idBase}
      title={"CheckTable"}
      info={info ? info : null}
      isComplete={isTableComplete}
      data={data}
      mapDone={mapDone}
      maxRow={maxRow}
      maxColumn={maxColumn}
      showInfo={showInfo}
      changeInfoVisibility={changeInfoVisibility}
      toggleMapDone={toggleMapDone}
    />
  );
}
