/**
 *
 * dennysjmarquez
 * Likedin Skype: dennysjmarquez
 * Email: dennysjmarquez@gmail.com
 *
 * **/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private state = new BehaviorSubject<string>('');

  state$ = this.state.asObservable();

  enviar(mensaje) {
    // function que llamará quien quiera transmitir un mensaje.
    this.state.next(mensaje);
  }

  constructor() { }
}
