import { exporter, importer } from "@dbml/core";
import { ConvertOption } from "./types";
///
export const convertOption = (
  from: ConvertOption,
  to: ConvertOption,
  val: string
): string => {
  console.log(from);
  console.log(to);
  let result: string = val;
  if (from.value != "dbml") {
    result = importer.import(val, from.value);
  }
  result = exporter.export(val, to.value);
  return result;
};
