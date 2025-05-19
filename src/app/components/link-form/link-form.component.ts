import { Component, Input } from '@angular/core';
import { Link } from '../../models/Link';
import { SvgInlineComponent } from "../svg-inline/svg-inline.component";
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-link-form',
  imports: [SvgInlineComponent, ButtonComponent, InputComponent],
  templateUrl: './link-form.component.html',
  styleUrl: './link-form.component.scss'
})
export class LinkFormComponent {
  @Input() link!: Link;
}
