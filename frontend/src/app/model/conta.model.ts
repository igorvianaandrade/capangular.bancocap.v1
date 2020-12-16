import { Cliente } from "./cliente.model";

export interface Conta {
    id?: number;
    hash?: string;
    cliente?: Cliente;
    saldo?: number;
}