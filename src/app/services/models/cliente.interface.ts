export interface Cliente {
  id: number
  nomeCompleto: string
  cpf: string
  genero: number
  telefone: string
  ativo: boolean
  enderecoId: number
  endereco: Endereco
}

export interface Endereco {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
  casa: string
}