import { useSyncExternalStore } from "react";
import locationStore from "./lib/location-store";

const useLocationPath = (): string => {
  return useSyncExternalStore(
    locationStore.subscribe,
    locationStore.getSnapshot,
    locationStore.getServerSnapshot,
  );
};

export default useLocationPath;
