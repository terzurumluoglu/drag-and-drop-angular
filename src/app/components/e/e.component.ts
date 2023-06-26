import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-e',
  templateUrl: './e.component.html',
  styleUrls: ['./e.component.scss']
})
export class EComponent extends BaseComponent {
  content: SafeHtml;

  ngOnInit(): void {
    this.content = this.getSafeContent('E');
  }

}
