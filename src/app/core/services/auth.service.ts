import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {GlobalConstants} from '../../core/global-constants';
import {StorageService} from "./storage.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storageService: StorageService,
    private http: HttpClient) {}



  login(email: string, password: string): Observable<any> {
    return this.http.post(
      `${GlobalConstants.API_URL}/auth/login`,
      {
        email,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      `${GlobalConstants.API_URL}/auth/register`,
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  refresh(): Observable<any> {
    return this.http.post(`${GlobalConstants.API_URL}/auth/refresh`, { }, httpOptions);
  }
  logout(): void {
    this.storageService.clean()
  }
}
