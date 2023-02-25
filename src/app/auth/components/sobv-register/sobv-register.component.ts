import { Component } from '@angular/core';

@Component({
  selector: 'sobv-sobv-register',
  templateUrl: './sobv-register.component.html',
  styleUrls: ['./sobv-register.component.scss']
})
export class SobvRegisterComponent {
  name: string = "";
  email: string = "";
  password: string = "";
  rePassword: string = "";

  setName (name: string) {
    this.name = name;
  } 

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setRePassword (password: string) {
    this.password = password;
  }

  onSubmit () {
    // TODO: get correct URL, make correct login.
    console.log(this.name, this.email, this.password, this.rePassword);
  }

} 
  