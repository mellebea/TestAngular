import { Prenda } from "./prenda";

export interface Pedido {
    id: number;
    empleadoId: number;
    fechaPedido: Date;
    prendas: Prenda[];
  }