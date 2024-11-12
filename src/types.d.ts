type product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name?: string
      number?: string
      code?: number
      expires?: {
        month: number
        year: number
      }
    }
  }
}

declare interface CardapioItem {
  id: string
  foto: string
  descricao: string
  preco: number
  nome: string
  porcao: string
}

declare interface Efood {
  find(arg0: (item: { id: string | undefined }) => boolean): Efood
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
