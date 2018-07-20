import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryFilter } from '../../category-filter.interface'

@Component({
  selector: 'app-category',
  template: `
    <ul class="nav">
      <li *ngFor="let categoryList of categoryContentList" [class.active]="curCateList===categoryList.category" (click)="curCateList=categoryList.category && clickedCategory.emit(categoryList.category)">
        <div class="contents-area">
          <p class="image-area">
            <img src={{categoryList.imgUrl}} />
          </p>
          <a class="name-area">{{ categoryList.category }}</a>
        </div>
      </li>
    </ul>
  `,
  styles: [`
    a, a:focus, a:hover {
      color: inherit;
      text-decoration: none;
    }
    /* 컨텐츠 영역 마진 */
    .nav {
      margin: 5px;
    }
    /* 컨텐츠 영역의 패딩과 정렬 설정 */
    .nav > li > div {
      padding: 4px 10px;
      text-align: center;
    }
    /* 이미지 곡률 지정 */
    .nav > li > div > p > img {
      border-radius: 50%;
    }
    /* 카테고리 선택시 영역 색상 변경 및 폰트 색상 변경 */
    .nav > li.active > div {
      color: hsla(89, 43%, 51%, 0.3) !important;
      background-color: grey;
    }
    /* 카테고리 리스트 정렬 및 커서 올렸을때 마우스 이미지 변경 */
    .nav > li {
      display: inline-block;
      cursor: pointer;
    }
    /* 카테고리 선택시 이미지 테두리 속성 */
    .nav > li.active > div > p > img {
      border-style: solid;
      border-width: 0.5em;
      border-color: hsla(89, 43%, 51%, 0.3);
    }
  `]
})
export class CategoryComponent implements OnInit {
  categoryContentList : CategoryFilter[];
  curCateList = 'ALL';

  @Output() clickedCategory = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.categoryContentList = [
      { category: 'ALL', imgUrl: 'https://cdn.wadiz.kr/resources/assets/img/c215ebf31bc7d3d28a2e427ce47c4886.jpg'},
      { category: 'TECH', imgUrl:  'https://cdn.wadiz.kr/resources/assets/img/912f519d6d62214aea09ffd35630daab.jpg'},
      { category: 'FASHION', imgUrl:  'https://cdn.wadiz.kr/resources/assets/img/56a64dc0f600839f467920a2598e1340.jpg'},
      { category: 'BEAUTY', imgUrl:  'https://cdn.wadiz.kr/resources/assets/img/29ca1d6c801542767c5f9fe2a14746c6.jpg'},
      { category: 'FOOD', imgUrl:  'https://cdn.wadiz.kr/resources/assets/img/b8f23dda2954a81dcb83ee92460d14fe.jpg'},
      { category: 'HOME', imgUrl: 'https://cdn.wadiz.kr/resources/assets/img/8794e59843df576beb42a54be20444a6.jpg'},
      { category: 'DESIGN', imgUrl: 'https://cdn.wadiz.kr/resources/assets/img/c215ebf31bc7d3d28a2e427ce47c4886.jpg'},
      { category: 'TRAVLE', imgUrl: 'https://cdn.wadiz.kr/resources/assets/img/165c7094a3543601cf70fa4ba859ac96.jpg'}
    ];
  }

}
