export interface ConvertOption {
  title: string;
  value: `dbml` | `mysql` | `postgres` | `json` | `mssql`;
}

export interface EditorState {
  editorText: string;
  previewText: string;
  setEditorText: (text: string) => void;
  setPreviewText: (text: string) => void;
}
export interface OptionsState {
  import: ConvertOption;
  export: ConvertOption;
  setImportFrom: (option: ConvertOption) => void;
  setExportFrom: (option: ConvertOption) => void;
}

export interface ConverterOption {
  from: ConvertOption;
  to: ConvertOption;
}
