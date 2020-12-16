import { Component, OnInit } from '@angular/core';

import { ContaService } from 'src/app/services/conta.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/model/cliente.model';
import { Conta } from 'src/app/model/conta.model';
import * as objectHash from 'object-hash';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  selectedValue: string = '';
  exibirCadastro: boolean = false;
  submitted: boolean = false;
  hash: any;

  conta: Conta ={
    hash: '',
    cliente: {
      cpf: '', 
      nome: ''
    },
    saldo: 0.0
  }

  mock_clientes: Cliente[] = [
    { cpf: '1', nome: "John" },
    { cpf: '2', nome: "Mary" },
    { cpf: '3', nome: "Sophie"},
    { cpf: '4', nome: "Susan"},
    { cpf: '5', nome: "Michel"}
  ];

  constructor(
    private contaService: ContaService,
    private clienteService: ClienteService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

  criarConta(): void {
    this.contaService.criarContas(this.conta);

    alert("Conta criada com sucesso!");    
    this.encontrarClientePorNome(this.selectedValue)
    this.conta.hash = this.hash;
    //console.log(this.conta);
  }

  encontrarClientePorNome(nome: string) {
    for (const client of this.mock_clientes) {
      if( client.nome == this.selectedValue ) {
        this.conta.cliente = client;
        this.hash = objectHash(this.conta);
        break;
      }
    }
  }

}
