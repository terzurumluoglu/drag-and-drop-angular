import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-d',
  templateUrl: './d.component.html',
  styleUrls: ['./d.component.scss']
})
export class DComponent extends BaseComponent {
  content: SafeHtml;

  ngOnInit(): void {
    this.content = this.getSafeContent('D');
  }

}
