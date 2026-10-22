const createDismissScheduler = (onDismiss: (id: string) => void, delayMs = 4500) => {
  const timers = new Map<string, ReturnType<typeof setTimeout>>();

  const cancel = (id: string) => {
    const timer = timers.get(id);
    if (timer) clearTimeout(timer);
    timers.delete(id);
  };

  const schedule = (id: string) => {
    cancel(id);
    timers.set(
      id,
      setTimeout(() => {
        timers.delete(id);
        onDismiss(id);
      }, delayMs),
    );
  };

  const clear = () => {
    timers.forEach((timer) => clearTimeout(timer));
    timers.clear();
  };

  return { schedule, cancel, clear };
};

export default createDismissScheduler;
