import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  const formater = new Intl.NumberFormat("ru-RU", {
    style: 'currency',
    currency: "RUB"
  })
  return formater.format(price)
}