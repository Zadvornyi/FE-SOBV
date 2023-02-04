import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Poll} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sobv-poll-modal',
  templateUrl: './sobv-poll-modal.component.html',
  styleUrls: ['./sobv-poll-modal.component.scss']
})
export class SobvPollModalComponent {
  public polls$: Observable<Poll[]> | undefined;

  constructor(
    private sobvPollsService: SobvPollsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (!params.categoryId) return
        this.polls$ = this.getPollsCategory(params.categoryId);
      }
    );

  }

  public getPollsCategory(categoryId: number): Observable<Poll[]> {
    return this.sobvPollsService.getPollsCategoryById(categoryId);
  }

}
