import { Component } from '@angular/core';
import { IWidget } from './shared/model';
import { WIDGETS } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drag-and-drop-angular';

  widgets: IWidget[] = WIDGETS;
}
