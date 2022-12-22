import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'sobv-page-not-found',
  templateUrl: './sobv-page-not-found.component.html',
  styleUrls: ['./sobv-page-not-found.component.scss']
})
export class SobvPageNotFoundComponent implements OnInit {
  error_number: string = "";
  error_name: string = "";
  error_description: string = "";

  constructor(private location: Location ) { }

  ngOnInit(): void {
    this.error_number = "404";
    this.error_name = "Page Not Found";
    this.error_description = "the page you requested couldn`t be found"
  }


  back() {
    this.location.back();
  }
}
