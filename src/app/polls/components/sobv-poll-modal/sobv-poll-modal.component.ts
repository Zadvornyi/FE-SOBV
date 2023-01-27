import {Component, OnInit} from '@angular/core';
import {SobvPollsService} from "../../services/sobv-polls.service";
import {Observable} from "rxjs";
import {filter} from 'rxjs/operators';
import {Poll} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sobv-sobv-poll-modal',
  templateUrl: './sobv-poll-modal.component.html',
  styleUrls: ['./sobv-poll-modal.component.scss']
})
export class SobvPollModalComponent implements OnInit {
  public polls$: Observable<Poll[]> | undefined;

  constructor(
    private sobvPollsService: SobvPollsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if(!params.categoryId) return
        this.polls$ = this.getPollsCategory(params.categoryId);
      }
    );

  }

  public getPollsCategory(categoryId: number): Observable<Poll[]> {
    return this.sobvPollsService.getPollsCategoryById(categoryId);
  }
}
