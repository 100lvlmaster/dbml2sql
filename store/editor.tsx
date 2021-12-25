import create from "zustand";
import { EditorState } from "../lib/types";

export const useEditor = create<EditorState>((set) => ({
  editorText: "",
  previewText: "",
  setPreviewText: (text: string) =>
    set((state) => {
      state.previewText = text;
    }),
  setEditorText: (text: string) =>
    set((state) => {
      state.editorText = text;
    }),
}));
