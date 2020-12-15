import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Deposito } from 'src/app/model/deposito.model';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {  
  rotaNovoDeposito:string = '/depositos-view';
  submitted = false;
  currentDate = new Date().toLocaleDateString();

  deposito: Deposito ={
    data: '',
    valor: 0,    
    conta: {
      hash: '',
      cliente:{
        nome:'IGOR VIANA ANDRADE',
        cpf:'123.456.789-12'
      },
      saldo:1000000
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    this.submitted = true;
    
  } 

}