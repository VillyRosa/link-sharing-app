import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/input/input.component';
import { SvgInlineComponent } from '@components/svg-inline/svg-inline.component';

@Component({
  selector: 'app-create-account',
  imports: [SvgInlineComponent, InputComponent, ButtonComponent, RouterModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

}
