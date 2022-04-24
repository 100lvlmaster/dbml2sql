import { exporter, importer } from "@dbml/core";
import { ConvertOption } from "./types";
///
export const convertOption = (
  from: ConvertOption,
  to: ConvertOption,
  val: string
): string => {
  const dbml = importer.import(val, from.value);
  const result = exporter.export(dbml, to.value);
  return result;
};

/**
 * Importer
 * - Converts anything to dbml
 */

/**
 * Exporter
 * - Converts dbml to anything
 */
