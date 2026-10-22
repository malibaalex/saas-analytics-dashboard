let counter = 0;

/** TLS-6 · Unique id generator */
const createId = (prefix = "id"): string => {
  counter += 1;
  const rand = Math.random().toString(36).slice(2, 8);
  return `${prefix}_${Date.now().toString(36)}${counter.toString(36)}${rand}`;
};
export default createId;
