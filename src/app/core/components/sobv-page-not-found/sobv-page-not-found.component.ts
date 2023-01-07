import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '@angular/router';

interface ICodeValues {
  name: string,
  description: string
}


const defaultCode = "404";

const codeValuesMap = new Map<string, ICodeValues>();
codeValuesMap.set("404", {name: "page not found", description: "Сторінка не знайдено"})

@Component({
  selector: 'sobv-page-not-found',
  templateUrl: './sobv-page-not-found.component.html',
  styleUrls: ['./sobv-page-not-found.component.scss']
})
export class SobvPageNotFoundComponent implements OnInit {
  code: string = "";
  name: string = "";
  description: string = "";

  constructor(private location: Location, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>
      {
        this.code = params?.code || defaultCode;

        const codeValues = codeValuesMap.get(this.code);
        this.name = codeValues?.name || "";
        this.description = codeValues?.description || "";
      })
    }


  back() {
    this.location.back();
  }
}
