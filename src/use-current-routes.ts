import { matchRoute, type RouteName } from "./matchRoute";
import useLocationPath from "./useLocationPath";

const useCurrentRoute = (): RouteName | null => {
  return matchRoute(useLocationPath());
};

export default useCurrentRoute;
