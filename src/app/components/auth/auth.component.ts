import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) { }

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
