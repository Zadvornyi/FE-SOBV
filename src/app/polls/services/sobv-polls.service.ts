import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {GlobalConstants} from '../../core/global-constants';
import {Choice, Question, Category} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SobvPollsService {
  constructor(private http: HttpClient) {
  }

  public getPollsCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${GlobalConstants.API_URL}/poll/categories`);
  }

  public getPollsCategoryById(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${GlobalConstants.API_URL}/poll/category/${categoryId}`);
  }

  public getQuestionsByPollId(pollId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${GlobalConstants.API_URL}/poll/${pollId}/question`);
  }

  public getChoicesByPollId(pollId: number): Observable<Choice[]> {
    return this.http.get<Choice[]>(`${GlobalConstants.API_URL}/poll/${pollId}/choice`);
  }
}
