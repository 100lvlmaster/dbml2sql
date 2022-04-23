import { exporter, importer } from "@dbml/core";
import { ConvertOption } from "./types";

const toDbml = (val: string, option: ConvertOption): string => {
  return importer.import(val, option.value);
};

///
export const convertOption = (
  from: ConvertOption,
  to: ConvertOption,
  val: string
): string => {
  let result: string = val;
  if (from.value != "dbml") {
    result = toDbml(val, from);
  }
  try {
    result = exporter.export(val, to.value);
  } catch (err) {
    console.log(`Error: ${err}`);
    return "";
  }
  return result;
};
