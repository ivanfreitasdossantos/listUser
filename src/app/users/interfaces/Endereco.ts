import { Localizacao } from "./localizacao";

export interface Endereco {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Localizacao
  }