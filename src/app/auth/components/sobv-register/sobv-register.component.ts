import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder
    ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: confirmPasswordValidator
    });
  }

  getControlName(): FormControl {
    return this.form.get('name') as FormControl;
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
  }
}
