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
  selector: 'app-c1',
  template: `
      <div class="wrap">
          <h3>Component 1</h3>
          
              <div class="form-group">
                  <label>Escriba un mensaje:</label>
                  <input class="form-control" #msg type="text">
              </div>
              <button class="btn btn-primary" type="button" (click)="enviarMensaje(msg.value)">Enviar Mensaje</button>
          
          <div class="pedir-mensaje" *ngIf="mensaje">

              <h3>
                  <span style="text-align: right">
                      <p>Mensaje:</p>
                  </span>
                  {{mensaje}}
              </h3>
          </div>
      </div>
  `,
  styles: [`

    .wrap{
        background-color: aquamarine;
        padding: 25px;
    }

    .pedir-mensaje{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        word-break: break-word;
    }

  `]
})
export class C1Component implements OnInit {

  mensaje: string;

  constructor( private globalService: GlobalService ) { }

  ngOnInit() {
    this.globalService.state$.subscribe(msg => this.mensaje = msg);
  }

  enviarMensaje(msg) {
    this.globalService.enviar(msg);
  }

}
