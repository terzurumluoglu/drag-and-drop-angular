import { Directive } from '@angular/core';
import { ContentService, SanitizerService } from '../../services';
import { SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: 'app-base'
})
export abstract class BaseComponent {
  constructor(
    public sanitizerService: SanitizerService,
    public contentService: ContentService
  ) { }

  getSafeContent = (componentName: string): SafeHtml => {
    const content: string = this.contentService.getContent(componentName);
    return this.sanitizerService.safeHtml(content);
  }
  
}

