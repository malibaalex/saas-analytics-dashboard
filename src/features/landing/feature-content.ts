export interface Feature {
  id: string;
  title: string;
  description: string;
}

/** LND-6 · Feature content */
export const features: Feature[] = [
  {
    id: "status",
    title: "See every status at a glance",
    description:
      "Drafts, reports in review, and published reports are counted and color-coded the moment you open the dashboard.",
  },
  {
    id: "find",
    title: "Find any report fast",
    description:
      "Search by name or owner, filter by status, and sort by date to land on the right report in seconds.",
  },
  {
    id: "create",
    title: "Start a report in under a minute",
    description:
      "Name it, set the reporting period, add an owner email, and it appears in your list as a draft.",
  },
];
