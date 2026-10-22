export type RouteName = "landing" | "dashboard";

export const routeTable: ReadonlyArray<{ path: string; name: RouteName }> = [
  { path: "/", name: "landing" },
  { path: "/dashboard", name: "dashboard" },
];

export const matchRoute = (pathname: string): RouteName | null => {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routeTable.find((r) => r.path === normalized)?.name ?? null;
};
