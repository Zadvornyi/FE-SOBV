import {Component} from '@angular/core';
import {AbstractControlOptions, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {Role} from "../../enums";
import {animate, style, transition, trigger} from "@angular/animations";
import {fadeInOut} from "../../../animations";
import {UserService} from "../../services/user.service";
import {EmailServerError, EmailValidator} from "../../validators/email.validator";


@Component({
  selector: 'sobv-login',
  templateUrl: './sobv-login.component.html',
  styleUrls: ['./sobv-login.component.scss'],
  animations: [fadeInOut]
})
export class SobvLoginComponent {
  form: FormGroup;
  isSubmitButtonDisabled: boolean = false;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      email: [null, {validators: [Validators.required, Validators.email], asyncValidators: [EmailServerError.createValidator(this.userService)]}],
      password: [null, {validators: [Validators.required, Validators.minLength(8)]}],
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
    }

    this.form.valueChanges.subscribe(() => {
      this.isSubmitButtonDisabled = this.form.invalid;
      this.isLoginFailed = false;
      console.log(this.controlEmail.errors)
      console.log(this.controlPassword.errors)
    })
  }

  get controlEmail(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get controlPassword(): FormControl {
    return this.form.get('password') as FormControl;
  }

  onSubmit() {
    if (true) {
    }
    if (!this.isSubmitButtonDisabled && this.form.invalid) {
      this.isLoginFailed = true;
      this.isSubmitButtonDisabled = this.form.invalid;
      this.errorMessage = "Перевірте будь-ласка поля";
    } else if (this.form.valid && !this.isSubmitButtonDisabled) {
      const {email, password} = this.form.value;
      this.authService.login(email, password).subscribe({
        next: data => {
          this.isLoginFailed = false;
          this.isLoggedIn = true;

          if (data && data.role === Role.Combatant) {
            this.router.navigate([`/profile/serviceman/${data.id}`]);
          } else {
            this.router.navigate(['/dashboard']);
          }
        },
        error: error => {
          this.errorMessage = error;
          this.isLoginFailed = true;
        }
      });
    }

  }
}

