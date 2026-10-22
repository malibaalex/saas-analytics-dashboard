const fmt = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", year: "numeric" });

/** Parse YYYY-MM-DD as a local date (avoids UTC off-by-one) */
export const parse = (iso: string): Date => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

/** DSH-TBL-7 · formatDateRange */
export const formatDateRange = (startIso: string, endIso: string): string => {
  return `${fmt.format(parse(startIso))} – ${fmt.format(parse(endIso))}`;
};
