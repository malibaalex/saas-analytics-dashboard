import { useEffect, type RefObject } from "react";
import { useEscapeKey } from "./useEscapeKey";
import { useFocusRestore } from "./useFocusRestore";
import useFocusTrap from "./useFocusTrap";

interface ModalBehaviorOptions {
  open: boolean;
  onClose: () => void;
  containerRef: RefObject<HTMLElement | null>;
  initialFocusRef?: RefObject<HTMLElement | null>;
}

export const useModalBehavior = ({
  open,
  onClose,
  containerRef,
  initialFocusRef,
}: ModalBehaviorOptions) => {
  useFocusRestore(open); // must run before the trap so the opener is captured first
  useFocusTrap(containerRef, open, initialFocusRef);
  useEscapeKey(onClose, open);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
};
