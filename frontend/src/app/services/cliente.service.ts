import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { Cliente } from './../model/cliente.model';
import { AppConfig } from './../token';
import { LoggerService } from './logger/logger.service';

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

}

interface Config {
    serviceURL?:string,
    IsDevelopmentEnv?:boolean
}