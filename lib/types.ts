export interface ConvertOption {
  title: string;
  value: `dbml` | `mysql` | `postgres` | `json` | `mssql`;
}

export interface EditorState {
  editorText: string;
  previewText: string;
  import: ConvertOption;
  export: ConvertOption;
  setEditorText: (text: string) => void;
  setPreviewText: (text: string) => void;
  setImportFrom: (option: ConvertOption) => void;
  setExportFrom: (option: ConvertOption) => void;
}

export interface ConverterOption {
  from: ConvertOption;
  to: ConvertOption;
}
