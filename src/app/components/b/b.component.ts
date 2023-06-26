import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent extends BaseComponent {
  content: SafeHtml;

  ngOnInit(): void {
    this.content = this.getSafeContent('B');
  }

}
