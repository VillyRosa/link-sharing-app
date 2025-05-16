import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LinksComponent } from './pages/links/links.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { PreviewComponent } from './pages/preview/preview.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'links', component: LinksComponent },
  { path: 'profile-details', component: ProfileDetailsComponent },
  { path: 'preview', component: PreviewComponent },
];
