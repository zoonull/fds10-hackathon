import { Component } from '@angular/core';

interface Reward {
  imgUrl: string;           // 대표이미지 (주소)
  title: string;            // 제목
  category: string;         // 카테고리 종류
  company: string;          // 회사명
  targetAmount: number;     // 목표 펀딩금액
  fundedAmount: number;     // 현재 펀딩금액
  startDate: Date;          // 펀딩 시작날짜
  endDate: Date;            // 펀딩 종료날짜
  likes: number;            // 인기도
}

@Component({
  selector: 'app-root',
  template: ``,
  styles: []
})
export class AppComponent {
  title = 'app';
  
}
