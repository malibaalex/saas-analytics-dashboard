import { useCallback, useEffect, useMemo, useReducer } from "react";
import type { ToastInput } from "../../types/toast";
import type { ToastContextValue } from "./ToastContext";
import toastReducer from "./toastReducer";
import createDismissScheduler from "./dismissScheduler";
import createId from "../../lib/createId";

const useToastState = (): ToastContextValue => {
  const [toasts, dispatch] = useReducer(toastReducer, []);

  const scheduler = useMemo(
    () => createDismissScheduler((id) => dispatch({ type: "dismiss", id })),
    [],
  );
  useEffect(() => () => scheduler.clear(), [scheduler]);

  const push = useCallback(
    ({ message, tone = "info" }: ToastInput) => {
      const id = createId("toast");
      dispatch({ type: "add", toast: { id, message, tone } });
      scheduler.schedule(id);
      return id;
    },
    [scheduler],
  );

  const dismiss = useCallback(
    (id: string) => {
      scheduler.cancel(id);
      dispatch({ type: "dismiss", id });
    },
    [scheduler],
  );

  return useMemo(() => ({ toasts, push, dismiss }), [toasts, push, dismiss]);
};

export default useToastState;
