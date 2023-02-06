import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Question} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sobv-poll-questions',
  templateUrl: './sobv-poll-questions.component.html',
  styleUrls: ['./sobv-poll-questions.component.scss']
})
export class SobvPollQuestionsComponent {
  public questions$: Observable<Question[]> | undefined;

  constructor(
    private sobvPollsService: SobvPollsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (!params.pollId) return
        this.questions$ = this.getQuestionsByPollId(params.pollId);
      }
    );

  }

  public getQuestionsByPollId(pollId: number): Observable<Question[]> {
    return this.sobvPollsService.getQuestionsByPollId(pollId);
  }
}
