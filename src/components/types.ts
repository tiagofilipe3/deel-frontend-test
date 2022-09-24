type TProduct = {
  id: string
  title: string
}

type TProducts = {
  products: TProduct[]
}

type TSuggestions = {
  suggestions: TProduct[]
  highlight: string
}

export type { TProduct, TProducts, TSuggestions }
