import { Component, Input } from '@angular/core';
import { SvgInlineComponent } from '@components/svg-inline/svg-inline.component';

@Component({
  selector: 'app-input',
  imports: [SvgInlineComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string = '';
  @Input() icon?: string;
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() secondary: boolean = false;
}
