import { CartItem } from '../store/reducers/cart'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: CartItem[]): number => {
  return items.reduce((accumulator, currentItem) => {
    // Verifica se 'preco' existe e é um número
    if (currentItem.preco) {
      return accumulator + currentItem.preco
    }
    return accumulator // Garante que o acumulador não é alterado se 'preco' não existir
  }, 0)
}
