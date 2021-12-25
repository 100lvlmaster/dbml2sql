import create from "zustand";
import { options } from "../lib/options";
import { ConvertOption, OptionsState } from "../lib/types";

export const useConvertOptions = create<OptionsState>((set) => ({
  import: options[2],
  export: options[1],
  setExportFrom: (option: ConvertOption) =>
    set((state) => {
      state.export = option;
    }),
  setImportFrom: (option: ConvertOption) =>
    set((state) => {
      state.import = option;
    }),
}));
