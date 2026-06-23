import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { IRecipeInfo } from "../interfaces/RecipeInfo";

export const YAML_DATA_DIR = path.join(process.cwd(), "data");

function yamlParse(content: string): string | unknown {
  /* 
    Convert Yaml to JS Object

    @param content: string
    @returns string | unknown
  */

  try {
    return yaml.load(content);
  } catch (e) {
    console.error(`[YamlHandler]: Fail to parse (${content})`);
  }
}

function formattingYAMLtoRecipe(
  yaml: any,
  fileName: string,
  withContent: boolean = false,
) {
  /* 
    Format the YAML to match the pattern of the programming, it can includes the content or only the info.

    @param: yaml: Object, fileName : string, withContent : bool (default: true)
    @returns: {info: IRecipeInfo, content: array[] | null}
  */

  if (yaml === null) return;
  const recipeInfo: IRecipeInfo = {
    fileName: fileName,
    ...yaml["info"],
  };

  if (!withContent) {
    return { info: recipeInfo, content: null };
  }

  const recipeContent: [] = yaml["content"].map((object: any) => {
    const componentType: string = Object.keys(object)[0];
    const componentConfig = Object.values(object)[0] as Array<Object>;
    return { type: componentType, config: componentConfig };
  });

  return { info: recipeInfo, content: recipeContent };
}

export function readYamlFile(fileName: string, withContent: boolean = true) {
  /* 
    Access a file in YAML_DATA_DIR by its name an then return its Info and Content

    @param fileName: string
    @returns {info: Object, content: Array[]}
  */

  const filePath = path.join(YAML_DATA_DIR, fileName);

  try {
    const fileContents = yamlParse(fs.readFileSync(filePath, "utf8")) as Object;
    return formattingYAMLtoRecipe(fileContents, fileName, withContent);
  } catch (e) {
    console.error(`[YamlHandler]: Failed to load YAML file (${fileName})`, e);
    return null;
  }
}

export function getAllYamlInfo() {
  /* 
    Get the info of all recipes in YAML_DATA_DIR

    @returns {info: Array[]}
  */

  try {
    const files = fs.readdirSync(YAML_DATA_DIR);
    const allFilesInfo = files
      .filter((file) => file.endsWith(".yml") || file.endsWith(".yaml"))
      .map((file) => {
        try {
          const fileContent = readYamlFile(file, false);
          if (fileContent === null || fileContent === undefined) return null;
          const info = fileContent["info"];
          console.log("info", info);
          return info;
        } catch (error) {
          console.warn(
            `RecipeReader[YamlHandler]: Failed to load content from "${file}". Skipping file...`,
            error,
          );
          return null;
        }
      })
      .filter((file: any) => file !== null);
    return allFilesInfo;
  } catch (globalError) {
    console.error(
      "RecipeReader[YamlHandler]: Critical error while accessing the files directory.",
      globalError,
    );
    return [];
  }
}
