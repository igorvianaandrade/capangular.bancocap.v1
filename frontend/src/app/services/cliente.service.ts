import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { Cliente } from './../model/cliente.model';
import { AppConfig } from './../token';
import { LoggerService } from './logger/logger.service';

//Encapsula interações externas, como acesso a dados
@Injectable()
export class ClienteService {

  constructor(
    private httpClient: HttpClient,
    @Inject(LoggerService) private loggerService:LoggerService,
    @Inject(AppConfig) private appConfig: Config
  ) { }

  private url = this.appConfig.serviceURL + "/clientes";

    public criarCliente(cliente: Cliente) {
        this.loggerService.log("criarCliente foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.post<Cliente>(this.url, cliente).subscribe();
    }

    public obterClientes() {
      
    let clientes:Cliente[];
        
      clientes=[      
        {
          "id": 30,
          "nome": "Igor",
          "cpf": "123.456.789-11"
        },
        {
          "id": 5,
          "nome": "Gilton",
          "cpf": "123.888.789-11"
        },
        {
          "id": 8,
          "nome": "Mayara",
          "cpf": "123.456.777-11"
        }   
      ]

      return clientes;
    }   

}

interface Config {
    serviceURL?:string,
    IsDevelopmentEnv?:boolean
}