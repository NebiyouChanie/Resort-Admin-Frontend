import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const  BASE_URL = "http://localhost:5001/api/v1"




