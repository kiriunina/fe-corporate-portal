import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {USER_AUTH_DATA} from '../consts/mocks/user-auth-data';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  private _user: User | null = this.userFromLocalStorage;

  constructor() { }

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }

  private get userFromLocalStorage(): User | null | undefined {
    const login = localStorage.getItem('login');

    return login ? USER_AUTH_DATA.find(item => item.email === login) : null;
  }
}
