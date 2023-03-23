import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {Role} from "../../enums";
import {animate, style, transition, trigger} from "@angular/animations";
import {fadeInOut} from "../../../animations";


@Component({
  selector: 'sobv-login',
  templateUrl: './sobv-login.component.html',
  styleUrls: ['./sobv-login.component.scss'],
  animations:[ fadeInOut ]
})
export class SobvLoginComponent {
  form: FormGroup;
  isSubmitButtonDisabled: boolean = false;
  isLoggedIn:boolean = false;
  isLoginFailed:boolean = false;
  errorMessage:string = '';

  constructor(
    private router : Router,
    private fb: FormBuilder,
    private authService: AuthService,
    ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.isLoggedIn = true;
    }

    this.form.valueChanges.subscribe(() => {
      this.isSubmitButtonDisabled = this.form.invalid;
      this.isLoginFailed = false;
    })
  }

  getControlEmail(): FormControl {
    return this.form.get('email') as FormControl;
  }

  getControlPassword (): FormControl {
    return this.form.get('password') as FormControl;
  }


  onSubmit () {
    if (!this.isSubmitButtonDisabled && this.form.invalid) {
      this.isLoginFailed = true;
      this.isSubmitButtonDisabled = this.form.invalid;
      this.errorMessage = "Перевірте будь-ласка поля";
    } else
    if(this.form.valid && !this.isSubmitButtonDisabled) {
      const { email, password } = this.form.value;
      this.authService.login(email, password).subscribe({
        next: data => {
          this.isLoginFailed = false;
          this.isLoggedIn = true;

          if(data && data.role === Role.Combatant) {
            this.router.navigate([`/profile/serviceman/${data.id}`]);
          }else {
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

