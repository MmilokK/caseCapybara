// bg-blue-900 border-blue-900
// bg-zinc-900 border-zinc-900
// bg-rose-900 border-rose-900

import { PRODUCT_PRICES } from "@/config/products"

export const COLORS = [
    {label: "Черный", value:'black', tw: "zinc-900"},
    {label: "Синий", value:'blue', tw: "blue-900"},
    {label: "Розовый", value:'rose', tw: "rose-900"},
] as const

export const MODELS = {
    name: "models",
    options: [
        {label: "iPhone X", value: "iphonex"},
        {label: "iPhone 11", value: "iphone11"},
        {label: "iPhone 12", value: "iphone12"},
        {label: "iPhone 13", value: "iphone13"},
        {label: "iPhone 14", value: "iphone14"},
        {label: "iPhone 15", value: "iphone15"},
    ]
} as const

export const MATERIALS = {
    name: "material",
    options: [
        {label: "Селикон", value: "silicone", description: undefined, price: PRODUCT_PRICES.material.silicone},
        {label: "Мягкий поликарбонат", value: "polycarbonate", description: "Защитное покрытие от царапин", price: PRODUCT_PRICES.material.polycarbonate}
    ]
} as const

export const FINISHES = {
    name: "finish",
    options: [
        {label: "Гладкое покрытие", value: "smooth", description: undefined, price: PRODUCT_PRICES.finish.smooth},
        {label: "Текстурированное покрытие", value: "textured", description: "Мягкое объемное покрытие", price: PRODUCT_PRICES.finish.textured}
    ]
} as const