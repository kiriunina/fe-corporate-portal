import {Component, Inject, OnInit} from '@angular/core';
import {AUTH_SERVICE_TOKEN, IAuthService} from '../../services/interfaces/iauth-service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'fe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(AUTH_SERVICE_TOKEN) private authService: IAuthService, private router: Router) { }

  get isAuth(): boolean {
    return this.authService.isAuth();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().pipe(first()).subscribe((response: boolean) => {
      this.router.navigate(['/login']);
    });
  }
}
