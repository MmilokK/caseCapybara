import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
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

export function constructMetadata({
  title = "CaseCapybara - сделанные на заказ высокопрочные чехлы для телефонов",
  description = "Создайте индивидуальный чехол на телефон в одно мгновение",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
}={}):Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{url: image}]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    icons,
    metadataBase: new URL("https://case-capybara.vercel.app/")
  }
}