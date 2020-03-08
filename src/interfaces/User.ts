enum porteC {
  pequeno,
  medio,
  grande
}

export interface UserInterface {
  nome?: string
  cpf: string
  telefone?: string
  cachorro: {
    raca: string,
    porte: porteC,
    nomeCachorro: string
  }
}
