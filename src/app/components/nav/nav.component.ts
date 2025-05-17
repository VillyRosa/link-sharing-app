import { Component } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { RouterModule } from '@angular/router';
import { NavLinkComponent } from "../nav-link/nav-link.component";
import { SvgInlineComponent } from "../svg-inline/svg-inline.component";

@Component({
  selector: 'app-nav',
  imports: [ButtonComponent, RouterModule, NavLinkComponent, SvgInlineComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
