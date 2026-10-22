export const validateDateRange = (start: string, end: string): string | null => {
  if (!start || !end) return "Choose both a start and an end date.";
  if (end < start) return "The end date can’t be before the start date.";
  return null;
};
