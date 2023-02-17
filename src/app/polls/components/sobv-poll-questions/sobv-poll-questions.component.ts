import {Component} from '@angular/core';
import {Observable, take} from "rxjs";
import {Choice, Question, Report} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";
import {ActivatedRoute, Params} from "@angular/router";
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
        // TODO: create get anctive report function
        // this.createServicemanPollReport(params).pipe(take(1))
        //   .subscribe();
      }
    );
  }


  private getQuestionsByPollId(pollId: number): Observable<Question[]> {
    return this.sobvPollsService.getQuestionsByPollId(pollId);
  }

  private getChoicesByPollId(pollId: number): Observable<Choice[]> {
    return this.sobvPollsService.getChoicesByPollId(pollId);
  }

  // private getActiveServicemanReport(params: Params): Observable<Report> {
  //   this.sobvPollsService.getServicemanReports(params.servicemanId).pipe(take(1))
  //     .subscribe((reports) => {
  //       reports.filter((item)=>{
  //
  //       })
  //     });
  // }

  private createServicemanPollReport(params: Params): Observable<Report> {
    const submitData = {
      "serviceman": params.servicemanId,
      "poll": params.pollId,
    }
    return this.sobvPollsService.createServicemanPollReport(params.servicemanId, submitData);
  }




}
