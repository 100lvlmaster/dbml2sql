export interface ConvertOption {
  title: string;
  value: `dbml` | `mysql` | `postgres` | `json` | `mssql`;
}

export interface EditorState {
  editorText: string;
  previewText: string;
  importAs: ConvertOption;
  exportAs: ConvertOption;
  setEditorText: (text: string) => void;
  setPreviewText: (text: string) => void;
  setImportFrom: (option: ConvertOption) => void;
  setExportFrom: (option: ConvertOption) => void;
}
