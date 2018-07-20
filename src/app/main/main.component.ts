import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-slider></app-slider>
    <app-category (clickedCategory)="clickedCategoryName($event)"></app-category>
    <app-list></app-list>
  `,
  styles: []
})
export class MainComponent implements OnInit {
  currentCategoryName = '';

  constructor() { }

  ngOnInit() {
  }

  clickedCategoryName(name: string) {
    console.log('[currentCategoryName]', name);
    this.currentCategoryName = name;
  }

}
