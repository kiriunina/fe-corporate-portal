import {Injectable} from '@angular/core';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  private _user: User | null = null;

  get user(): User {
    return this._user;
  }

  set user(user: User) {
    this._user = user;
  }
}
