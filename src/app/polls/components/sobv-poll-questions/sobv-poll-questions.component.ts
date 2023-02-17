import {Component} from '@angular/core';
import {Observable, take} from "rxjs";
import {Choice, Question} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'sobv-poll-questions',
  templateUrl: './sobv-poll-questions.component.html',
  styleUrls: ['./sobv-poll-questions.component.scss']
})
export class SobvPollQuestionsComponent {
  public questions$!: Observable<Question[]>;
  public choices!: Choice[]
  public answersPollForm!: FormGroup
  constructor(
    private sobvPollsService: SobvPollsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.answersPollForm = this.formBuilder.group({})
    this.route.params.subscribe(params => {
        if (!params.pollId) return
        this.questions$ = this.getQuestionsByPollId(params.pollId);
        this.getChoicesByPollId(params.pollId).pipe(take(1))
          .subscribe((resp) => {
            this.choices = resp;
          });
      }
    );
  }

  public getQuestionsByPollId(pollId: number): Observable<Question[]> {
    return this.sobvPollsService.getQuestionsByPollId(pollId);
  }

  public getChoicesByPollId(pollId: number): Observable<Choice[]> {
    return this.sobvPollsService.getChoicesByPollId(pollId);
  }




}
