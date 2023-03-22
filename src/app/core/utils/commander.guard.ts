import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {Role} from "../enums";


@Injectable({
  providedIn: 'root'
})
export class CommanderGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let role = this.authService.getUser().role
    if (role !== Role.combatant) {
      this.router.navigate(['error/403']);
      return false;
    } else {
      return true;
    }

  }
}
