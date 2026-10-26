export type Tone = "success" | "accent" | "primary";

/** Pill-badge classes per tone (token colors only). */
export const badgeTone: Record<Tone, string> = {
  success: "bg-success/15 text-success",
  accent: "bg-accent/15 text-accent",
  primary: "bg-primary/15 text-primary",
};

export const textTone: Record<Tone, string> = {
  success: "text-success",
  accent: "text-accent",
  primary: "text-primary",
};

/** Lucide-style stroke paths, rendered by <Icon />. */
export const icons = {
  pulse: ["M22 12 18 12 15 20 9 4 6 12 2 12"],
  check: ["M20 6 9 17 4 12"],
  external: [
    "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    "M15 3 21 3 21 9",
    "M10 14 21 3",
  ],
  sun: [
    "M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0",
    "M12 2v2",
    "M12 20v2",
    "m4.93 4.93 1.41 1.41",
    "m17.66 17.66 1.41 1.41",
    "M2 12h2",
    "M20 12h2",
    "m6.34 17.66-1.41 1.41",
    "m19.07 4.93-1.41 1.41",
  ],
  moon: ["M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"],
  plus: ["M12 5v14", "M5 12h14"],
  search: ["M19 11a8 8 0 1 0-16 0 8 8 0 0 0 16 0", "m21 21-4.35-4.35"],
  alert: ["M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0", "M12 8v4", "M12 16h.01"],
  menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
  close: ["M18 6 6 18", "m6 6 12 12"],
  overview: ["M3 3h7v7H3z", "M14 3h7v7h-7z", "M14 14h7v7h-7z", "M3 14h7v7H3z"],
  events: ["M13 10V3L4 14h7v7l9-11h-7z"],
  customers: [
    "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
    "M13 7a4 4 0 1 0-8 0 4 4 0 0 0 8 0",
    "M23 21v-2a4 4 0 0 0-3-3.87",
    "M16 3.13a4 4 0 0 1 0 7.75",
  ],
  reports: ["M18 20V10M12 20V4M6 20v-6"],
  settings: [
    "M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0",
    "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z",
  ],
} as const;

/* ---------------------------------- Nav ---------------------------------- */

export type NavLink = { label: string; href: string; external?: boolean };

export const navLinks: NavLink[] = [
  { label: "Demo", href: "#demo" },
  { label: "Features", href: "#demo" },
  { label: "GitHub", href: "https://github.com", external: true },
];

export const dashboardHref = "/dashboard";

/* ---------------------------------- Hero --------------------------------- */

export const heroContent = {
  badge: "Live demo, no sign-up",
  title: "See churn coming before it costs you",
  description:
    "Track MRR, active users and churn in one dashboard, then invite your team in under a minute.",
  primaryCta: "Open my dashboard",
  secondaryCta: "See what to try ↓",
};

export const trustItems = ["Keyboard accessible", "WCAG AA contrast", "Responsive from 375px"];

/* ------------------------------ Hero preview ------------------------------ */

export const previewContent = {
  url: "pulse.internal/analytics/overview",
  pipelineStatus: "Telemetry pipeline live",
  searchPlaceholder: "Search events, customers...",
  inviteLabel: "Invite teammate",
  chartTitle: "Ingestion Throughput (Last 24 Hours)",
  chartPeak: "Peak: 4,820 evt/s",
  tableTitle: "Live Event Ingestion",
  tableStatus: "Auto-refreshing",
};

export const previewUser = { initials: "SR", name: "Shohanur R.", role: "Engineer" };

export type SidebarItem = {
  label: string;
  icon: readonly string[];
  active?: boolean;
};

export const sidebarItems: SidebarItem[] = [
  { label: "Overview", icon: icons.overview, active: true },
  { label: "Events", icon: icons.events },
  { label: "Customers", icon: icons.customers },
  { label: "Reports", icon: icons.reports },
  { label: "Settings", icon: icons.settings },
];

export type Kpi = {
  label: string;
  badge: string;
  value: string;
  delta: string;
  deltaTone: Tone;
};

export const kpis: Kpi[] = [
  {
    label: "MRR",
    badge: "Stripe",
    value: "$48,210",
    delta: "+11.4% this mo",
    deltaTone: "success",
  },
  {
    label: "Active Users (WAU)",
    badge: "Postgres",
    value: "3,184",
    delta: "+6.2% vs last week",
    deltaTone: "success",
  },
  {
    label: "Gross Churn",
    badge: "30-day",
    value: "2.4%",
    delta: "-0.3% this cycle",
    deltaTone: "accent",
  },
];

export type EventRow = {
  name: string;
  dispatcher: string;
  status: string;
  tone: Tone;
  latency: string;
};

export const eventRows: EventRow[] = [
  {
    name: "user.checkout_completed",
    dispatcher: "billing_worker_1",
    status: "Active",
    tone: "success",
    latency: "14ms",
  },
  {
    name: "customer.trial_started",
    dispatcher: "auth_worker_3",
    status: "Trial",
    tone: "accent",
    latency: "18ms",
  },
  {
    name: "subscription.cancelled",
    dispatcher: "stripe_webhook_0",
    status: "Churned",
    tone: "primary",
    latency: "22ms",
  },
];

/* ------------------------------- What to try ------------------------------ */

export const whatToTryContent = {
  heading: "Four things worth testing",
  description: "Each one has a clear finish line. Try them in the live dashboard.",
};

export type TryCardData = {
  id: "form" | "table" | "modal" | "responsive";
  number: number;
  title: string;
  description: string;
  href: string;
  tag?: string;
  wide?: boolean;
};

export const tryCards: TryCardData[] = [
  {
    id: "form",
    number: 1,
    title: "Validated form",
    description: "Clear errors, keyboard friendly, submits when valid.",
    href: dashboardHref,
    tag: "interactive",
  },
  {
    id: "table",
    number: 2,
    title: "Data table, every state",
    description:
      "Sort, filter, and switch between all four states. Handles high-density rows and edge latencies with ease.",
    href: dashboardHref,
    wide: true,
  },
  {
    id: "modal",
    number: 3,
    title: "Accessible modal",
    description: "Traps focus, closes on Escape, returns focus cleanly to trigger button.",
    href: dashboardHref,
    tag: "a11y",
  },
  {
    id: "responsive",
    number: 4,
    title: "Responsive and deployed",
    description: "Built mobile first and live on the web with crisp touch targets.",
    href: dashboardHref,
    tag: "deploy",
  },
];

export const tableStates = ["Loading", "Empty", "Error", "Loaded"] as const;
export const activeTableState = "Loaded";

export type OrgRow = {
  org: string;
  plan: string;
  volume: string;
  status: string;
  tone: Tone;
};

export const orgRows: OrgRow[] = [
  {
    org: "Campfire Inc.",
    plan: "Scale ($490/mo)",
    volume: "1.2M req/mo",
    status: "Healthy",
    tone: "success",
  },
  {
    org: "Docket Studio",
    plan: "Starter ($99/mo)",
    volume: "340k req/mo",
    status: "Trial",
    tone: "accent",
  },
];

export const formPreview = {
  label: "Work Email",
  value: "alex@gmail.com",
  error: "Enter a valid work email",
};

export const modalPreview = {
  title: "Invite team member",
  hint: "Esc to close",
  body: "Grant read-only or telemetry access.",
  cancel: "Cancel",
  confirm: "Send invite",
};

export const deviceFrames = [
  { label: "375", size: "h-20 w-12" },
  { label: "768", size: "h-24 w-20" },
  { label: "1280px", size: "h-28 w-28", desktop: true },
];

/* ------------------------------- CTA / Footer ----------------------------- */

export const ctaContent = {
  heading: "Ready to see it work?",
  description: "Test the live dashboard with sample production data, no setup required.",
  button: "Open my dashboard",
};

export const footerContent = {
  tagline: "A portfolio project. Sample data only.",
  links: [
    { label: "Dashboard", href: dashboardHref },
    { label: "GitHub", href: "https://github.com", external: true },
    { label: "README", href: "#" },
  ] as NavLink[],
};
