import type { ReactNode } from "react";
import { ToastContext } from "./ToastContext";
import ToastViewport from "./ToastViewport";
import useToastState from "./useToastState";

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const value = useToastState();
  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastViewport toasts={value.toasts} onDismiss={value.dismiss} />
    </ToastContext.Provider>
  );
};

export default ToastProvider;
