import { Component, inject, Input, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-link',
  imports: [RouterModule],
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss'
})
export class NavLinkComponent implements OnInit, OnDestroy {  
  private router = inject(Router);
  private routerSubscription!: Subscription;
  public inThisPage: boolean = false;

  @Input() href: string = '';

  public ngOnInit(): void {
    this.checkCurrentRoute();

    this.routerSubscription = this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.checkCurrentRoute();
      }
    );
  }

  private checkCurrentRoute(): void {
    this.inThisPage = this.router.url === this.href;
  }

  public ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
