export const validateEmail = (email: string): string | null => {
  const v = email.trim();
  if (!v) return "Enter the owner’s email.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email, like name@company.com.";
  return null;
};
