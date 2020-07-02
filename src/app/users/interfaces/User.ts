import { Endereco } from "./endereco";
import { Companhia } from "./companhia";

export interface User{
    id: number,
    name: string,
    username: string,
    email: string,
    address: Endereco,
    phone: string,
    website: string,
    company: Companhia
  }
  