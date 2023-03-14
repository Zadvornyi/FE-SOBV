import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {take} from "rxjs";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? null : { confirmPassword: true };
};

@Component({
  selector: 'sobv-sobv-register',
  templateUrl: './sobv-register.component.html',
  styleUrls: ['./sobv-register.component.scss']
})
export class SobvRegisterComponent {
  form: FormGroup;
  isSignUpFailed:boolean = false;
  errorMessage:string = '';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: confirmPasswordValidator
    });
  }

  getControlFirstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }
  getControlLastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  getControlEmail(): FormControl {
    return this.form.get('email') as FormControl;
  }

  getControlPassword (): FormControl {
    return this.form.get('password') as FormControl;
  }

  getControlConfirmPassword (): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }

  isConfirmPasswordValid (): boolean {
    return Boolean(confirmPasswordValidator(this.form) && this.form.get('confirmPassword')?.touched);
  }

  onSubmit () {
    console.log(this.form.value);
    if(this.form.valid) {
      const { firstName, lastName, email, password } = this.form.value;

      this.authService.register(`${firstName} {lastName}`, email, password).pipe(
        take(1)
      ).subscribe({
        next: resp => {
          console.log(resp);
          this.isSignUpFailed = false;
        },
        error: error => {
          this.errorMessage = error.message;
          // TODO make timer for notificaltion
          this.isSignUpFailed = true;
        }
      });
    }




  }
}
