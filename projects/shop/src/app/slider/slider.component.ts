import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shp-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  currentSliderPages: number = 3;
  currentSliderPage: number = 1;
  leftPosition = -(896 * this.currentSliderPage) + 'px';

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    this.currentSliderPage += 1;

    if(this.currentSliderPage > this.currentSliderPages - 1) {
      this.currentSliderPage = 0;
    }

    this.leftPosition = -(896 * this.currentSliderPage) + 'px';
  }

  previousPage() {
    this.currentSliderPage -= 1;

    if(this.currentSliderPage < 0) {
      this.currentSliderPage = this.currentSliderPages - 1;
    }

    this.leftPosition = -(896 * this.currentSliderPage) + 'px';
  }
}
