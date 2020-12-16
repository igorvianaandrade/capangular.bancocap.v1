import { Injectable } from '@angular/core';

//Recursos independentes de componentes como services de log.
@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message:any) {
    console.log(message);
  }

}