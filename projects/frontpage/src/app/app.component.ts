import { Component } from '@angular/core';
import { Perspective } from 'projects/shared/enums/perspective';

@Component({
  selector: 'frp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  perspective: Perspective = Perspective.Normal;
}
