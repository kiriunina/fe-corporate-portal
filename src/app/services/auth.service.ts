import { Injectable } from '@angular/core';
import {USER_AUTH_DATA} from '../mocks/user-auth-data';
import {Observable, of} from 'rxjs';

const LOGIN = 'login';
const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuth(): boolean {
    return localStorage.getItem(TOKEN) !== null;
  }

  login(email: string, password: string): Observable<boolean> {
    const isUserExist = USER_AUTH_DATA.includes({email, password});

    if (isUserExist) {
      localStorage.setItem(LOGIN, email);
      localStorage.setItem(TOKEN, this.generateToken());

      return of(true);
    }

    return of(false);
  }

  private generateToken(): string {
    return Math.random().toString(36);
  }
}
