import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  imports: [RouterModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss'
})
export class NavLinkComponent implements OnInit {  
  private router = inject(Router);
  public inThisPage: boolean = false;

  @Input() href: string = '';

  public ngOnInit(): void {
    this.inThisPage = this.router.url === this.href;
  }
}
