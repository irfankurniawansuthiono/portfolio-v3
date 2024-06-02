import { create } from "zustand";

export const usePreviewCertificate = create((set) => ({
  previewCertificate: false,
  setPreviewCertificate: () => set(() => ({ previewCertificate: true })),
}));
