import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/input/input.component';
import { SvgInlineComponent } from '@components/svg-inline/svg-inline.component';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ButtonComponent, RouterModule, SvgInlineComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
