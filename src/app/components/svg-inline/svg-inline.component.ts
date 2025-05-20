import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-inline',
  imports: [CommonModule],
  templateUrl: './svg-inline.component.html',
  styleUrl: './svg-inline.component.scss'
})
export class SvgInlineComponent implements OnChanges {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  public svgContent: SafeHtml = '';
  
  @Input() src: string = '';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['src'] && this.src) {
      this.loadSvg();
    }
  }

  public loadSvg(): void {
    this.http.get(this.src, { responseType: 'text' }).subscribe(svg => {
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
    });
  }
}
