import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalConstants} from '../../core/global-constants';
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Role} from "../enums";


const USER_KEY = 'auth-user';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient) {
  }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
  hasRole(role: Role) {
    return this.isLoggedIn() && this.getUser().role === role;
  }
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${GlobalConstants.API_URL}/auth/login`,
      {
        email,
        password,
      },
      httpOptions
    ).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.saveUser(user);
      return user;
    }));

  }

  register(first_name: string, last_name: string, email: string, password: string): Observable<any> {
    return this.http.post(
      `${GlobalConstants.API_URL}/auth/register`,
      {
        first_name,
        last_name,
        email,
        password,
      },
      httpOptions
    );
  }

  refresh(): Observable<any> {
    return this.http.post(`${GlobalConstants.API_URL}/auth/refresh`, {}, httpOptions);
  }

  logout(): void {
    // remove user from local storage to log user out
    this.clean()
    this.router.navigate(['/auth/login']);
  }
}
