import { Component, Input, OnInit } from '@angular/core';
import { Perspective } from 'projects/shared/enums/perspective';

@Component({
  selector: 'frp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() perspective: Perspective = Perspective.Normal;

  constructor() { }

  ngOnInit(): void {
  }

}
