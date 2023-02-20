import {Component} from '@angular/core';
import {mergeMap, Observable, of, take, tap} from "rxjs";
import {Choice, Question, Report} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";
import {ActivatedRoute, Params} from "@angular/router";
import {SobvPollQuestionsFormService} from "../../services/sobv-poll-questions-form.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'sobv-poll-questions',
  templateUrl: './sobv-poll-questions.component.html',
  styleUrls: ['./sobv-poll-questions.component.scss']
})
export class SobvPollQuestionsComponent {
  public questions$!: Observable<Question[]>;
  public choices!: Choice[];
  public servicemanId?: string;
  public pollId?: string;
  public activeReport?: Report;
  constructor(
    public pollFormService: SobvPollQuestionsFormService,
    private sobvPollsService: SobvPollsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.servicemanId = this.route.snapshot.paramMap.get('servicemanId') as string
    this.pollId = this.route.snapshot.paramMap.get('pollId') as string

    this.sobvPollsService.getServicemanActiveReport(this.servicemanId, this.pollId).pipe(
      mergeMap((activeReports) => {
        if(activeReports.length) {
          return of(activeReports[0])
        }else {
          return this.createServicemanPollReport(this.servicemanId as string, this.pollId as string)
        }
      }),
      map(report=> {
        this.activeReport = report as Report;
        return this.activeReport;
      }),
      take(1)
    ).subscribe();

    // this.route.params.subscribe(params => {
    //     if (!params.pollId) return
    //     this.questions$ = this.getQuestionsByPollId(params.pollId);
    //     this.getChoicesByPollId(params.pollId).pipe(take(1))
    //       .subscribe((resp) => {
    //         this.choices = resp;
    //       });
    //     // TODO: create get anctive report function
    //     // this.createServicemanPollReport(params).pipe(take(1))
    //     //   .subscribe();
    //   }
    // );
  }


  private getQuestionsByPollId(pollId: number): Observable<Question[]> {
    return this.sobvPollsService.getQuestionsByPollId(pollId);
  }

  private getChoicesByPollId(pollId: number): Observable<Choice[]> {
    return this.sobvPollsService.getChoicesByPollId(pollId);
  }

  private createServicemanPollReport(servicemanId: string , pollId: string): Observable<Report> {
    const submitData = {
      "serviceman": servicemanId,
      "poll":pollId,
    }
    return this.sobvPollsService.createServicemanPollReport(servicemanId, submitData);
  }


}
