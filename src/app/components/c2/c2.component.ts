/**
 *
 * dennysjmarquez
 * Likedin Skype: dennysjmarquez
 * Email: dennysjmarquez@gmail.com
 *
 * **/

import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-c2',
  template: `
      <div class="wrap">
          <h3>Component 2</h3>
          
              <div class="form-group">
                  <label>Escriba un mensaje:</label>
                  <input class="form-control" #msg type="text">
              </div>
              <button class="btn btn-primary" type="button" (click)="enviarMensaje(msg.value)">Enviar Mensaje</button>
          
          <div class="pedir-mensaje">
              <button class="btn btn-info" (click)="verMensaje()">Ver mensaje</button>
              <h3 *ngIf="mensaje">{{mensaje}}</h3>
          </div>
      </div>
  `,
  styles: [`

    .wrap{
        background-color: tomato;
        padding: 25px;
    }

    .pedir-mensaje{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

  `]
})
export class C2Component implements OnInit {

  mensaje: string;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {}

  enviarMensaje(msg) {
    this.globalService.enviar(msg);
  }

  verMensaje() {
    this.globalService.state$.pipe(take(1)).subscribe(msg => this.mensaje = msg);
  }


}
