import { createContext } from "react";
import type { Toast, ToastInput } from "../../types/toast";

export interface ToastContextValue {
  toasts: Toast[];
  push: (input: ToastInput) => string;
  dismiss: (id: string) => void;
}

export const ToastContext = createContext<ToastContextValue | null>(null);
