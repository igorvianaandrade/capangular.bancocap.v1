import { Conta } from "./conta.model";

export interface Saque {    
    data: string;
    valor: number;
    conta: Conta;
}