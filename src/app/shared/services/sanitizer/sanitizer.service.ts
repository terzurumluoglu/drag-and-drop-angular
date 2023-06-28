import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SanitizerService {

  constructor(private sanitizer: DomSanitizer) { }

  safeHtml = (text: string): SafeHtml => this.sanitizer.bypassSecurityTrustHtml(text);

  safeResourceUrl = (text: string): SafeResourceUrl => this.sanitizer.bypassSecurityTrustResourceUrl(text);

  safeScript = (text: string): SafeScript => this.sanitizer.bypassSecurityTrustScript(text);

  safeStyle = (text: string): SafeStyle => this.sanitizer.bypassSecurityTrustStyle(text);

  safeUrl = (text: string): SafeUrl => this.sanitizer.bypassSecurityTrustUrl(text);
}
