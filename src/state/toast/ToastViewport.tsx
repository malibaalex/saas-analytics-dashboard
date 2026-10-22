import type { Toast } from "../../types/toast";
import ToastItem from "./ToastItem";

interface ToastViewportProps {
  toasts: Toast[];
  onDismiss: (id: string) => void;
}

const ToastViewport = ({ toasts, onDismiss }: ToastViewportProps) => {
  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex flex-col items-center gap-2 px-4 sm:items-end sm:pr-6"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

export default ToastViewport;
