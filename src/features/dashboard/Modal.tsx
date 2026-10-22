import { useRef, type ReactNode, type RefObject } from "react";
import { createPortal } from "react-dom";
import { useModalBehavior } from "./useModalBehavior";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  initialFocusRef?: RefObject<HTMLElement | null>;
  children: ReactNode;
}

const Modal = ({ open, onClose, labelledBy, initialFocusRef, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalBehavior({ open, onClose, containerRef: dialogRef, initialFocusRef });

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className="relative w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-2xl outline-none"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
