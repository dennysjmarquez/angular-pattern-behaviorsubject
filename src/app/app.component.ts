/**
 *
 * dennysjmarquez
 * Likedin Skype: dennysjmarquez
 * Email: dennysjmarquez@gmail.com
 *
 * **/

import {Component, OnInit} from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  mensaje: string;

  constructor( private casaBulmaService: GlobalService ) {}

  ngOnInit() {

    this.casaBulmaService.state$.subscribe(mensaje => this.mensaje = mensaje);

  }

}
