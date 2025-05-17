import { Component } from '@angular/core';
import { SvgInlineComponent } from "../../components/svg-inline/svg-inline.component";
import { InputComponent } from "../../components/input/input.component";
import { ButtonComponent } from "../../components/button/button.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-account',
  imports: [SvgInlineComponent, InputComponent, ButtonComponent, RouterModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

}
