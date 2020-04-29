import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AUTH_SERVICE_TOKEN, IAuthService} from '../../services/interfaces/iauth-service';

const emailFormControlName = 'emailFormControlName';
const passwordFormControlName = 'passwordFormControlName';

@Component({
  selector: 'fe-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  readonly authFormGroup: FormGroup = new FormGroup({
    emailFormControlName: new FormControl('', Validators.required),
    passwordFormControlName: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  isError: boolean;

  constructor(@Inject(AUTH_SERVICE_TOKEN) private authService: IAuthService, private router: Router) { }

  get emailFormControl(): FormControl {
    return this.authFormGroup.get(emailFormControlName) as FormControl;
  }

  get passwordFormControl(): FormControl {
    return this.authFormGroup.get(passwordFormControlName) as FormControl;
  }

  get isAuthFormInvalid(): boolean {
    return this.authFormGroup.invalid;
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.emailFormControl.value, this.passwordFormControl.value)
      .pipe(first())
      .subscribe((result: boolean) => {
        if (result) {
          this.isError = false;

          this.router.navigate(['/']);
        } else {
          this.isError = true;
        }
      });
  }
}
