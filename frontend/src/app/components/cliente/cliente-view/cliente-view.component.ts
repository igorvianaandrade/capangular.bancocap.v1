import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit {

  mock_cliente: Cliente = {
    cpf: '123.456.789-11', 
    nome: "Igor"
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  teste(): void{
    
  }

}
