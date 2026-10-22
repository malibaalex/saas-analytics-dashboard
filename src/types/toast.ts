/** TLS-4 · Toast types */
export type ToastTone = "success" | "error" | "info";

export interface Toast {
  id: string;
  message: string;
  tone: ToastTone;
}

export interface ToastInput {
  message: string;
  tone?: ToastTone;
}
