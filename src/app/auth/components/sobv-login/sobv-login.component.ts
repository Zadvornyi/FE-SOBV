import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface IForm {
  email: string,
  password: string
}

@Component({
  selector: 'sobv-login',
  templateUrl: './sobv-login.component.html',
  styleUrls: ['./sobv-login.component.scss']
})
export class SobvLoginComponent {
  formData: IForm = {
    email: "", 
    password: ""
  }
  submitted = false;

  setEmail(email: string) {
    this.formData.email = email;
  }

  setPassword(password: string) {
    this.formData.password = password;
  }

  onSubmit () {
    // TODO: get correct URL, make correct login.
    if (!this.submitted) {
      this.submitted = true;
    } 
    
    console.log(this.formData);
  }

  onChange (event: any) {
    console.log(event.target.value);    
  }


} 

  