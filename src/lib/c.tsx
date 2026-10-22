import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** TLS-1 · Class name joiner (clsx + tailwind-merge) */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default cn;
