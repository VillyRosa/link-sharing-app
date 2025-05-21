import { Routes } from '@angular/router';
import { authGuard } from '@guards/auth.guard';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { CreateAccountComponent } from '@pages/create-account/create-account.component';
import { LinksComponent } from '@pages/links/links.component';
import { LoginComponent } from '@pages/login/login.component';
import { PreviewComponent } from '@pages/preview/preview.component';
import { ProfileDetailsComponent } from '@pages/profile-details/profile-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: '/links', pathMatch: 'full' },
      { path: 'links', component: LinksComponent },
      { path: 'profile-details', component: ProfileDetailsComponent },
    ]
  },
  { path: 'preview', component: PreviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
];
