import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../global-constants';
import {Company} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SobvCompanyService {

  constructor(private http: HttpClient) { }

  /**
   * Create a new company
   * @param data - The company data
   * @returns Observable of the created company
   */
  createCompany(data: { sequence_number: number, description?: string, commander?: string }): Observable<Company> {
    return this.http.post<Company>(`${GlobalConstants.API_URL}/api/company`, data);
  }

  /**
   * Get all companies
   * @return Observable of all companies
   */
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${GlobalConstants.API_URL}/api/company`);
  }

  /**
   * Get a company by ID
   * @param id - The company ID
   * @return Observable of the company
   */
  getCompanyById(id: string): Observable<Company> {
    return this.http.get<Company>(`${GlobalConstants.API_URL}/api/company/${id}`);
  }

  /**
   * Update a company
   * @param id - The company ID
   * @param data - The updated company data
   * @return Observable of the updated company
   */
  updateCompany(id: string, data: any): Observable<Company> {
    return this.http.put<Company>(`${GlobalConstants.API_URL}/api/company/${id}`, data);
  }

  /**
   * Delete a company
   * @param id - The company ID
   * @return Observable of the deletion result
   */
  deleteCompany(id: string): Observable<any> {
    return this.http.delete(`${GlobalConstants.API_URL}/api/company/${id}`);
  }
}
