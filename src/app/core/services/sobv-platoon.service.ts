import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../global-constants';
import {Platoon} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SobvPlatoonService {

  constructor(private http: HttpClient) { }

  /**
   * Create a new platoon
   * @param data - The platoon data
   * @returns Observable of the created platoon
   */
  createPlatoon(data: { sequence_number: number, description?: string, commander?: string, company?: string }): Observable<Platoon> {
    return this.http.post<Platoon>(`${GlobalConstants.API_URL}/api/platoon`, data);
  }

  /**
   * Get all platoons
   * @return Observable of all platoons
   */
  getPlatoons(): Observable<Platoon[]> {
    return this.http.get<Platoon[]>(`${GlobalConstants.API_URL}/api/platoon`);
  }

  /**
   * Get a platoon by ID
   * @param id - The platoon ID
   * @return Observable of the platoon
   */
  getPlatoonById(id: string): Observable<Platoon> {
    return this.http.get<Platoon>(`${GlobalConstants.API_URL}/api/platoon/${id}`);
  }

  /**
   * Update a platoon
   * @param id - The platoon ID
   * @param data - The updated platoon data
   * @return Observable of the updated platoon
   */
  updatePlatoon(id: string, data: any): Observable<Platoon> {
    return this.http.put<Platoon>(`${GlobalConstants.API_URL}/api/platoon/${id}`, data);
  }

  /**
   * Delete a platoon
   * @param id - The platoon ID
   * @return Observable of the deletion result
   */
  deletePlatoon(id: string): Observable<any> {
    return this.http.delete(`${GlobalConstants.API_URL}/api/platoon/${id}`);
  }
}
