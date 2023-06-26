import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-f',
  templateUrl: './f.component.html',
  styleUrls: ['./f.component.scss']
})
export class FComponent extends BaseComponent {
  content: SafeHtml;

  ngOnInit(): void {
    this.content = this.getSafeContent('F');
  }

}
