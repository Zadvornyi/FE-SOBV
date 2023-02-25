import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export function confirmPasswordValidator(passwordControlName: string) {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const passwordControl = control.parent?.get(passwordControlName);

    if (passwordControl?.value !== control.value) {
      return { confirmPassword: true };
    }

    return null;
  };
}

@Component({
  selector: 'sobv-sobv-register',
  templateUrl: './sobv-register.component.html',
  styleUrls: ['./sobv-register.component.scss']
})
export class SobvRegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
    ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required,  confirmPasswordValidator('password')]],
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


  onSubmit () {
    console.log(this.form.value);
  }
} 
  