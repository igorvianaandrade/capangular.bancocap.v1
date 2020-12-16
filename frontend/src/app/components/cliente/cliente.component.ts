import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente.model';
import { ClienteViewComponent } from './cliente-view/cliente-view.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']  
})
export class ClienteComponent implements OnInit {
  
  rotaNovoCliente:string = '/clientes-view';
  submitted = false;

  componenteView: ClienteViewComponent;

  cliente: Cliente = {
    nome: '',
    cpf: ''
  }

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  /*showMessage(msg: string, cliente: Cliente): void {
    alert(msg);
    console.log(cliente);
  }*/  

  criarCliente(): void {
    this.clienteService.criarCliente(this.cliente);

    alert("Cliente " 
    +  this.cliente.nome.toString() 
    + " cadastrado com sucesso!");

    //console.log(this.cliente);
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
  } 

  // onSubmit(form: NgForm) {
  //   this.submitted = true;
  //   alert("Cliente" +  form.name.toString() + "cadastrado com sucesso!");
  //   console.log(this.cliente);
  // } 

}
