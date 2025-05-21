import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static readonly AUTH_USER_KEY = 'authUser';

  public login(user: string): void {
    localStorage.setItem(AuthService.AUTH_USER_KEY, user);
  }

  public logout(): void {
    localStorage.removeItem(AuthService.AUTH_USER_KEY);
  }

  public static isAuthenticated(): boolean {
    return localStorage.getItem(this.AUTH_USER_KEY) !== null;
  }
}
