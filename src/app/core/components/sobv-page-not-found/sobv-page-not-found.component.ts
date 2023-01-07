import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '@angular/router';

const defaultValue = {
  number:"404",
  name: "Page Not Found",
  description: "the page you requested couldn`t be found"
}

@Component({
  selector: 'sobv-page-not-found',
  templateUrl: './sobv-page-not-found.component.html',
  styleUrls: ['./sobv-page-not-found.component.scss']
})
export class SobvPageNotFoundComponent implements OnInit {
  number: string = "";
  name: string = "";
  description: string = "";

  constructor(private location: Location, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      {
        this.number = params.number ?? defaultValue.number;
        this.name = params.name ?? defaultValue.name;
        this.description = params.description ?? defaultValue.description;
      })
    }


  back() {
    this.location.back();
  }
}
