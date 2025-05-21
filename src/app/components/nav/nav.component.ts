import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { NavLinkComponent } from '@components/nav-link/nav-link.component';

@Component({
  selector: 'app-nav',
  imports: [ButtonComponent, RouterModule, NavLinkComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
