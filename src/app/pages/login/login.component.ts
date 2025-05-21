import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@components/button/button.component';
import { InputComponent } from '@components/input/input.component';
import { SvgInlineComponent } from '@components/svg-inline/svg-inline.component';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  imports: [InputComponent, ButtonComponent, RouterModule, SvgInlineComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public form: FormGroup = this.fb.group({
    email: '',
    password: ''
  });

  public ngOnInit(): void {
    this.authService.logout();
  }

  public onSubmit(): void {
    this.authService.login('user');
    this.router.navigate(['/links']);
  }
}
