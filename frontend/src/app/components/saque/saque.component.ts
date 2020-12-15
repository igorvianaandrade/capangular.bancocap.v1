import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Saque } from 'src/app/model/saque.model';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {  
  rotaNovoSaque:string = '/saques-view';
  submitted = false;
  currentDate = new Date().toLocaleDateString();

  saque: Saque ={
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