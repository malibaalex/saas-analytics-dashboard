import { useEffect } from "react";

export const useFocusRestore = (active: boolean) => {
  useEffect(() => {
    if (!active) return;
    const opener = document.activeElement as HTMLElement | null;
    return () => opener?.focus?.();
  }, [active]);
};
