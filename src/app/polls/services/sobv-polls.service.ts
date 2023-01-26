import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Serviceman} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SobvPollsService {
  // TODO: MAKE ENV VARIABLE
  API_URL = 'http://127.0.0.1:8080/api';
  constructor(private http: HttpClient) {
  }

  public getPollsCategoryById(): Observable<Serviceman[]> {
    return this.http.get<Serviceman[]>(`${this.API_URL}/serviceman/`);
  }
}
