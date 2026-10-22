export const validateName = (name: string): string | null => {
  const v = name.trim();
  if (!v) return "Enter a report name.";
  if (v.length < 3) return "Use at least 3 characters.";
  if (v.length > 80) return "Keep the name under 80 characters.";
  return null;
};
