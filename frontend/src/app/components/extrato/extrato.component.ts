import { Component, OnInit } from '@angular/core';
import { Deposito } from 'src/app/model/deposito.model';
import { Extrato } from 'src/app/model/extrato.model';
import { Saque } from 'src/app/model/saque.model';
import { Transferencia } from 'src/app/model/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {    
  currentDate = new Date().toLocaleDateString();

  extrato: Extrato = {data: '', valor: 0, tipoOperacao: '', hashOrigem: ''};

  saque: Saque ={
    data: '13/12/2020 08:08:32',
    valor: 10,
    conta: {
      hash: '4d73157b6a4d824733a9a4853be98643cfd4b40e',
      cliente:{
        nome:'IGOR VIANA ANDRADE',
        cpf:'123.456.789-12'
      },
      saldo:1000000
    }
  }

  deposito: Deposito ={
    data: '13/12/2020 10:40:32',
    valor: 400,    
    conta: {
      hash: '4r73157b6a4d824733a9a4853be98643cfd4b40e',
      cliente:{
        nome:'MANUEL DA PADARIA',
        cpf:'123.456.789-17'
      },
      saldo:1000000
    }
  }

  transferencia: Transferencia ={
    data: '14/12/2020 07:05:20',
    valor: 800,    
    contaOrigem: {
      hash: '4r73159b6a4d824733a9a4853be98643cfd4b40e',
      cliente:{
        nome:'JACI SIVA',
        cpf:'123.456.789-87'
      },
      saldo:1000000
    },
    contaDestino: {
      hash: '4d73157b6a4d824733a9a4853be98643cfd4b40e',
      cliente:{
        nome:'IGOR VIANA ANDRADE',
        cpf:'123.456.789-12'
      },
      saldo:10000
    }
  }

  columnDefs = [    
    { field: 'data', sortable: true, filter: true  },
    { field: 'valor', sortable: true, filter: true },
    { field: 'tipoOperacao', sortable: true, filter: true },
    { field: 'hashOrigem', sortable: true, filter: true }
  ];

  rowData : Array<Extrato> = [
    {data: this.saque.data, valor: this.saque.valor, tipoOperacao: 'Saque', hashOrigem:''},
    {data: this.deposito.data, valor: this.deposito.valor, tipoOperacao: 'Depósito', hashOrigem:''},
    {data: this.transferencia.data, valor: this.transferencia.valor, tipoOperacao: 'Transferência', hashOrigem:this.transferencia.contaOrigem.hash},
  ];

  constructor() { }

  ngOnInit(): void {
  } 

}