import { Injectable } from '@angular/core';
import {USER_AUTH_DATA} from '../consts/mocks/user-auth-data';
import {Observable, of} from 'rxjs';
import {UserStorageService} from './user-storage.service';

const LOGIN = 'login';
const TOKEN = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userStorageService: UserStorageService) { }

  isAuth(): boolean {
    return localStorage.getItem(TOKEN) !== null;
  }

  login(email: string, password: string): Observable<boolean> {
    const user = USER_AUTH_DATA.find(item => item.email === email && item.password === password);

    if (user) {
      localStorage.setItem(LOGIN, email);
      localStorage.setItem(TOKEN, this.generateToken());

      this.userStorageService.user = user;

      return of(true);
    }

    return of(false);
  }

  private generateToken(): string {
    return Math.random().toString(36);
  }
}
