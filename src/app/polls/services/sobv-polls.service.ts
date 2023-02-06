import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Poll, Choice, Question} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SobvPollsService {
  // TODO: MAKE GLOBAL ENV VARIABLE
  API_URL = 'http://127.0.0.1:8080/api';
  constructor(private http: HttpClient) {
  }

  public getPollsCategoryById(categoryId: number): Observable<Poll[]> {
    return this.http.get<Poll[]>(`${this.API_URL}/poll/category/${categoryId}`);
  }

  public getQuestionsByPollId(pollId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.API_URL}/poll/${pollId}/question`);
  }
  public getChoicesByPollId(pollId: number): Observable<Choice[]> {
    return this.http.get<Choice[]>(`${this.API_URL}/poll/${pollId}/choice`);
  }
}
