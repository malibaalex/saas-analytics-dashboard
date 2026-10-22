type Listener = () => void;

const listeners = new Set<Listener>();
const notify = () => listeners.forEach((l) => l());

if (typeof window !== "undefined") {
  window.addEventListener("popstate", notify);
}

const locationStore = {
  subscribe(listener: Listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot: () => window.location.pathname,
  getServerSnapshot: () => "/",
  navigate(to: string) {
    if (to !== window.location.pathname + window.location.search) {
      window.history.pushState({}, "", to);
      window.scrollTo(0, 0);
    }
    notify();
  },
};

export default locationStore;
