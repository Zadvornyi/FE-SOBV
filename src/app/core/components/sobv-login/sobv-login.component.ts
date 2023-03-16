import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from "../../services/auth.service";
import {StorageService} from "../../services/storage.service";


@Component({
  selector: 'sobv-login',
  templateUrl: './sobv-login.component.html',
  styleUrls: ['./sobv-login.component.scss']
})
export class SobvLoginComponent {
  form: FormGroup;
  isLoggedIn:boolean = false;
  isLoginFailed:boolean = false;
  errorMessage:string = '';
  roles: string[] = [];
  constructor(
    private router : Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService
    ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  getControlEmail(): FormControl {
    return this.form.get('email') as FormControl;
  }

  getControlPassword (): FormControl {
    return this.form.get('password') as FormControl;
  }


  onSubmit () {
    if(this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.login(email, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          if(data) this.router.navigate(['/dashboard']);
        },
        error: error => {
          this.errorMessage = error;
          this.isLoginFailed = true;
        }
      });
    }

  }
}

