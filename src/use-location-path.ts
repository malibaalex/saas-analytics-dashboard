import { useSyncExternalStore } from "react";
import locationStore from "./lib/location-store";

const useLocationPath = (): string => {
  return useSyncExternalStore(
    // oxlint-disable-next-line typescript/unbound-method
    locationStore.subscribe,
    locationStore.getSnapshot,
    locationStore.getServerSnapshot,
  );
};

export default useLocationPath;
