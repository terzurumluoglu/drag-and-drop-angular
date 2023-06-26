import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';
import { SafeHtml } from '@angular/platform-browser';
import { ContentService, SanitizerService } from 'src/app/shared/services';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AComponent extends BaseComponent implements OnInit {
  content: SafeHtml;

  ngOnInit(): void {
    this.content = this.getSafeContent('A');
  }
}
