import {Component} from '@angular/core';
import {AuthService} from "./core/services/auth.service";
import {StorageService} from "./core/services/storage.service";
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
    private storageService: StorageService,
    private authService: AuthService) {
  }

  ngOnInit() {
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
    }

  }
}
