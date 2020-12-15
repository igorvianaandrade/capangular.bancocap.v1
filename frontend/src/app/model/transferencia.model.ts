  
import { Conta } from "./conta.model";

export interface Transferencia {    
    data: string;
    valor: number;
    contaOrigem: Conta;
    contaDestino: Conta;
}