import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";
import {take} from "rxjs";
import {Router} from "@angular/router";
import {fadeInOut} from "../../../animations";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? null : {confirmPassword: true};
};

@Component({
  selector: 'sobv-sobv-register',
  templateUrl: './sobv-register.component.html',
  styleUrls: ['./sobv-register.component.scss'],
  animations: [ fadeInOut ]
})
export class SobvRegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitButtonDisabled: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.form = this.formBuilder.group({
      email:  ['',  { validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      firstName:  ['',  { validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur'}],
      lastName:  ['',  { validators: [Validators.required, Validators.minLength(3)], updateOn: 'blur'}],
      password:  ['',  { validators: [Validators.required, Validators.minLength(8)], updateOn: 'blur'}],
      confirmPassword:  ['',  { validators: [Validators.required]}]
    }, {
      validators: confirmPasswordValidator
    });

    this.form.markAsUntouched();
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {
      this.isSubmitButtonDisabled = this.form.invalid;
      this.isSignUpFailed = false;
      console.log(this.form.value, "log");
    })
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

  getControlPassword(): FormControl {
    return this.form.get('password') as FormControl;
  }

  getControlConfirmPassword(): FormControl {
    return this.form.get('confirmPassword') as FormControl;
  }

  isConfirmPasswordValid(): boolean {
    return Boolean(confirmPasswordValidator(this.form) && this.form.get('confirmPassword')?.touched);
  }

  onSubmit() {
    if (!this.isSubmitButtonDisabled && this.form.invalid) {
      this.isSignUpFailed = true;
      this.isSubmitButtonDisabled = this.form.invalid;
      this.errorMessage = "Перевірте будь-ласка поля";
  } else
    if (this.form.valid && !this.isSubmitButtonDisabled) {
      const {firstName, lastName, email, password} = this.form.value;

      this.authService.register(firstName, lastName, email, password).pipe(
        take(1)
      ).subscribe({
        next: resp => {
          this.router.navigate(['/dashboard']);
          this.isSignUpFailed = false;
        },
        error: error => {
          this.errorMessage = error;
          // TODO make timer for notificaltion
          this.isSignUpFailed = true;
        }
      });
    }
  }
}
