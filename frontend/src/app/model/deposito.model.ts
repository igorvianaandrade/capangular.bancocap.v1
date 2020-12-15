import { Conta } from "./conta.model";

export interface Deposito {    
    data: string;
    valor: number;
    conta: Conta;
}