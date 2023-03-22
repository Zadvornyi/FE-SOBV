import {Component} from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sobv-root',
  templateUrl: './sobv.component.html',
  styleUrls: ['./sobv.component.scss']
})
export class SobvComponent {
  title = 'sobv';
  constructor(
    private router : Router,
    private authService: AuthService) {
  }

  ngOnInit() {

  }
}
