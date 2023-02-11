import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Serviceman} from "../interfaces";
import {GlobalConstants} from "../../core/global-constants";

@Injectable({
  providedIn: 'root'
})
export class SobvProfileServicemanService {

  constructor(private http: HttpClient) {
  }

  public getServicemanById(ServicemanId: number): Observable<Serviceman> {
    return this.http.get<Serviceman>(`${GlobalConstants.API_URL}/serviceman/${ServicemanId}`);
  }
}
