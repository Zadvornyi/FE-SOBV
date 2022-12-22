import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sobv-page-not-found',
  templateUrl: './sobv-page-not-found.component.html',
  styleUrls: ['./sobv-page-not-found.component.scss']
})
export class SobvPageNotFoundComponent implements OnInit {
  error_number: string = "";
  error_name: string = "";
  error_description: string = "";

  constructor() { }

  ngOnInit(): void {
    this.error_number = "404";
    this.error_name = "Page Not Found";
    this.error_description = "We`re sorry , the page you requested couldn`t be found Please go back home"
  }

}
