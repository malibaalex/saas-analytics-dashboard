export type RouteName = "landing" | "dashboard";

export const routeTable: ReadonlyArray<{ path: string; name: RouteName }> = [
  { path: "/", name: "landing" },
  { path: "/dashboard", name: "dashboard" },
];

/** RTE-4 · matchRoute — returns null for unknown paths */
export function matchRoute(pathname: string): RouteName | null {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routeTable.find((r) => r.path === normalized)?.name ?? null;
}
