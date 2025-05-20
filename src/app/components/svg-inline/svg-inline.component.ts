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
  @Input() removeFill: boolean = false;

  public ngOnChanges(changes: SimpleChanges): void {
    if ((changes['src'] || changes['removeFill']) && this.src) {
      this.loadSvg();
    }
  }

  private loadSvg(): void {
    this.http.get(this.src, { responseType: 'text' }).subscribe({
      next: (svg) => {
        let processedSvg = svg;
        
        if (this.removeFill) {
          processedSvg = this.removeFillAttributes(svg);
        }

        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(processedSvg);
      },
      error: (err) => {
        console.error('Error loading SVG:', err);
        this.svgContent = '';
      }
    });
  }

  private removeFillAttributes(svg: string): string {
    return svg.replace(/fill="[^"]*"/g, '')
             .replace(/fill:[^;"]*(;|")/g, '$1')
             .replace(/fill=[^ >]*/g, '');
  }
}
