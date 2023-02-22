import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {GlobalConstants} from '../../core/global-constants';
import {Choice, Question, Category, Report} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SobvPollsService {
  constructor(private http: HttpClient) {
  }

  public getPollsCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${GlobalConstants.API_URL}/poll/categories`);
  }

  public getPollsCategoryById(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${GlobalConstants.API_URL}/poll/category/${categoryId}`);
  }

  public getQuestionsByPollId(pollId: string): Observable<Question[]> {
    return this.http.get<Question[]>(`${GlobalConstants.API_URL}/poll/${pollId}/question`);
  }

  public getChoicesByPollId(pollId: string): Observable<Choice[]> {
    return this.http.get<Choice[]>(`${GlobalConstants.API_URL}/poll/${pollId}/choice`);
  }

  public getServicemanReports(servicemanId: string): Observable<Report[]> {
    return this.http.get<Report[]>(`${GlobalConstants.API_URL}/serviceman/${servicemanId}/report`);
  }
  public getServicemanActiveReport(servicemanId: string, pollId:string): Observable<Report[]> {
    return this.http.get<Report[]>(`${GlobalConstants.API_URL}/serviceman/${servicemanId}/poll/${pollId}/active/report`);
  }
  public createServicemanPollReport(servicemanId: string, data: any): Observable<any> {
    return this.http.post<Report>(`${GlobalConstants.API_URL}/serviceman/${servicemanId}/report`, data);
  }
  public bulkServicemanPollAnswers(servicemanId: string, data: any): Observable<any> {
    return this.http.post<Report>(`${GlobalConstants.API_URL}/serviceman/${servicemanId}/bulk/answers`, data);
  }

}
