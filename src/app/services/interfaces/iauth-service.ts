import {Observable} from 'rxjs';
import {User} from '../../models/user';

export const AUTH_SERVICE_TOKEN = 'AuthServiceToken';

export interface IAuthService {
  isAuth(): boolean;
  login(email: string, password: string): Observable<boolean>;
  getUserFromLocalStorage(): User | null | undefined;
}
