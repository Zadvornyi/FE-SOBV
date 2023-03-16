import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'sobv-login',
  templateUrl: './sobv-login.component.html',
  styleUrls: ['./sobv-login.component.scss']
})
export class SobvLoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
    ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  getControlEmail(): FormControl {
    return this.form.get('email') as FormControl;
  }

  getControlPassword (): FormControl {
    return this.form.get('password') as FormControl;
  }


  onSubmit () {
    console.log(this.form.value);
  }
}

