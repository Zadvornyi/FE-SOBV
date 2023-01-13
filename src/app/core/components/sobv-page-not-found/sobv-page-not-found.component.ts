import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '@angular/router';

interface ICodeValues {
  name: string,
}


const defaultCode = "404";

const codeValuesMap = new Map<string, ICodeValues>();
codeValuesMap.set("403", {name: "В доступі відмовлено"})
codeValuesMap.set("404", {name: "Сторінку не знайдено"})
codeValuesMap.set("500", {name: "Неполадки на стороні серверу"})

@Component({
  selector: 'sobv-page-not-found',
  templateUrl: './sobv-page-not-found.component.html',
  styleUrls: ['./sobv-page-not-found.component.scss']
})
export class SobvPageNotFoundComponent implements OnInit {
  code: string = "";
  name: string = "";

  constructor(private location: Location, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>
      {
        this.code = params?.code || defaultCode;
        this.setCorrectUrl(this.code)

        const codeValues = codeValuesMap.get(this.code);
        this.name = codeValues?.name || "";
      })
    }


  setCorrectUrl(url: string) {
    this.location.replaceState(`/error/${url}`)
  }

  back() {
    this.location.back();
  }
}
