import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'shp-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnDestroy{

  layoutNumber: number = 0;
  layoutNumber$ = new BehaviorSubject<number>(0);
  closePage$ = new Subject<void>();

  constructor() { 
    this.layoutNumber$.pipe(
      map((number) => Math.abs(number)),
      takeUntil(this.closePage$)
    ).subscribe((number) => this.layoutNumber = number);
  }

  ngOnDestroy() {
    this.closePage$.next();
  }

  nextPage() {
    this.layoutNumber$.next((this.layoutNumber$.value + 1) % 3);
  }

  previousPage() {
    this.layoutNumber$.next((this.layoutNumber$.value - 1) % 3);
  }
}
