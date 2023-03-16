import {Component, Input, OnInit} from '@angular/core';
import { NavigationEnd, Router} from "@angular/router";

export enum ContentType {
  default = 1,
  login,
  register,
  profile,
  dashboard,
}


@Component({
  selector: 'sobv-header',
  templateUrl: './sobv-header.component.html',
  styleUrls: ['./sobv-header.component.scss']
})
export class SobvHeaderComponent implements OnInit {
  @Input() public contentType: ContentType;

  constructor(private router: Router) {
    this.contentType = ContentType.default;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        this.setSelectedContentType(currentUrl)
      }
    });
  }

  ngOnInit(): void {

  }

  public get ContentType(): typeof ContentType {
    return ContentType;
  }

  setSelectedContentType (url: string) {
    console.log(url)

    let contentType = ContentType.default;

    if(url === "/login"){
      contentType = ContentType.login;
    }else if(url === "/register"){
      contentType = ContentType.register
    }else if(url === "/profile"){
      contentType = ContentType.profile
    }else if(url === "/dashboard"){
      contentType = ContentType.dashboard
    }

    this.contentType = contentType;
  }
}
