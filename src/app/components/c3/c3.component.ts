import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  template: `
    <div style="border: 1px solid; padding: 10px">
      <h3>Component 3</h3>
      <app-c2></app-c2>
    </div>
  `,
  styles: []
})
export class C3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
