import { exporter, importer } from "@dbml/core";
import { ConverterOption, ConvertOption } from "./types";

const toDbml = (val: string, option: ConvertOption): string => {
  return importer.import(val, option.value);
};

///
export const convertOption = (
  val: string,
  options: ConverterOption
): string => {
  let result: string = val;
  if (options.from.value != "dbml") {
    result = toDbml(val, options.from);
  }
  try {
    result = exporter.export(val, options.to.value);
  } catch (err) {
    console.log(`Error: ${err}`);
    return "";
  }
  return result;
};
