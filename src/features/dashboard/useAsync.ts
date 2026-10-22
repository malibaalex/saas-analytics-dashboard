import { useCallback, useEffect, useRef, useState } from "react";

export type AsyncStatus = "idle" | "loading" | "success" | "error";

interface AsyncState<T> {
  status: AsyncStatus;
  data: T | undefined;
  error: Error | null;
}

const toError = (e: unknown) => (e instanceof Error ? e : new Error(String(e)));

export const useAsync = <TArgs extends unknown[], T>(
  fn: (...args: TArgs) => Promise<T>,
  { immediate = false }: { immediate?: boolean } = {},
) => {
  const [state, setState] = useState<AsyncState<T>>({
    status: "idle",
    data: undefined,
    error: null,
  });
  const fnRef = useRef(fn);
  // oxlint-disable-next-line react/refs
  fnRef.current = fn;

  const run = useCallback(async (...args: TArgs): Promise<T> => {
    setState((s) => ({ ...s, status: "loading", error: null }));
    try {
      const data = await fnRef.current(...args);
      setState({ status: "success", data, error: null });
      return data;
    } catch (e) {
      const error = toError(e);
      setState((s) => ({ ...s, status: "error", error }));
      throw error;
    }
  }, []);

  const setData = useCallback((update: (prev: T | undefined) => T) => {
    setState((s) => ({ ...s, data: update(s.data) }));
  }, []);

  useEffect(() => {
    if (immediate) (run as () => Promise<T>)().catch(() => {});
  }, [immediate, run]);

  return { ...state, isLoading: state.status === "loading", run, setData };
};
