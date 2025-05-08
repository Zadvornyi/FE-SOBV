import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Serviceman} from "../../core/interfaces";
import {GlobalConstants} from "../../core/global-constants";

@Injectable({
  providedIn: 'root'
})
export class SobvProfileServicemanService {

  constructor(private http: HttpClient) {
  }

  getServicemen(): Observable<Serviceman[]> {
    return this.http.get<Serviceman[]>(`${GlobalConstants.API_URL}/api/serviceman`);
  }

  public getServicemanById(ServicemanId: number): Observable<Serviceman> {
    return this.http.get<Serviceman>(`${GlobalConstants.API_URL}/api/serviceman/${ServicemanId}`);
  }

  public createServiceman(serviceman: Partial<Serviceman>): Observable<Serviceman> {
    return this.http.post<Serviceman>(`${GlobalConstants.API_URL}/api/serviceman`, serviceman);
  }
}
