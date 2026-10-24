// Formata um número como dinheiro: 4.5 -> "R$ 4,50"
export function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
