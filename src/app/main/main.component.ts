import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-slider></app-slider>
    <app-category></app-category>
    <app-list></app-list>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
