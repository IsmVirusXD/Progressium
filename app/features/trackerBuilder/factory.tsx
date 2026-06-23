import dynamic from "next/dynamic";
import { TextListProps } from "./interfaces/component";

const TextList = dynamic(() => import("./components/textList"));

interface Configuration {
  type: string;
  config: object;
}

export const ComponentFactory = ({ type, config }: Configuration) => {
  switch (type) {
    case "CheckTable":
      // console.log("Selecionado o Elemento CheckTable");
      // console.log(config);
      return null;
      break;
    case "CounterList":
      // console.log("Selecionado o Elemento CounterList");
      // console.log(config);
      return null;
      break;
    case "CounterTable":
      // console.log("Selecionado o Elemento CounterTable");
      // console.log(config);
      return null;
      break;
    case "TextList":
      let value = config as TextListProps;
      console.log("antes", value.items);
      const newitems = value.items.flat(Infinity);
      console.log("depois:", newitems);
      const data = {
        ...value,
        items: newitems,
      };
      // console.log("data", data);
      return <TextList {...data} />;
      break;
    default:
      // console.log("Nada selecionado");
      return null;
      break;
  }
};
