import { matchRoute, type RouteName } from "./matchRoute";
import useLocationPath from "./use-location-path";

const useCurrentRoute = (): RouteName | null => {
  return matchRoute(useLocationPath());
};

export default useCurrentRoute;
