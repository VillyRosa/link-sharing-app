import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-inline',
  imports: [CommonModule],
  templateUrl: './svg-inline.component.html',
  styleUrl: './svg-inline.component.scss'
})
export class SvgInlineComponent implements OnInit {
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);
  public svgContent: SafeHtml = '';
  
  @Input() src: string = '';

  public ngOnInit(): void {
    this.http.get(this.src, { responseType: 'text' }).subscribe(svg => {
      this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svg);
    });
  }
}
