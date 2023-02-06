import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Choice} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sobv-poll-choices',
  templateUrl: './sobv-poll-choices.component.html',
  styleUrls: ['./sobv-poll-choices.component.scss']
})
export class SobvPollChoicesComponent {
  public choices$: Observable<Choice[]> | undefined;

  constructor(
    private sobvPollsService: SobvPollsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (!params.pollId) return
        this.choices$ = this.getChoicesByPollId(params.pollId);
      }
    );

  }

  public getChoicesByPollId(pollId: number): Observable<Choice[]> {
    return this.sobvPollsService.getChoicesByPollId(pollId);
  }
}
