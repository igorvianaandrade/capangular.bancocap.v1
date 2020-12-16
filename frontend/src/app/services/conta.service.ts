import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

import { Conta } from '../model/conta.model';
import { AppConfig } from './../token';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class ContaService {

  constructor(
    private httpClient: HttpClient,
    @Inject(LoggerService) private loggerService:LoggerService,
    @Inject(AppConfig) private appConfig: Config
  ) { }

  private url = this.appConfig.serviceURL + "/contas";    

    public criarContas(conta: Conta) {
        this.loggerService.log("criarContas foi chamado...");
        this.loggerService.log(this.url);
        return this.httpClient.post<Conta>(this.url, conta).subscribe();
    }
}

interface Config {
    serviceURL?:string,
    IsDevelopmentEnv?:boolean
}