import { Pessoa } from "./pessoa";

export class Pedido {
  id: number
  requerente: Pessoa
  valorRequerido: number
  valorJuros: number
  situacao: Situacao
}
