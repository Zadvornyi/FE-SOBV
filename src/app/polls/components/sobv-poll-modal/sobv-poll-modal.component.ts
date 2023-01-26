import {Component, OnInit} from '@angular/core';
import {SobvPollsService} from "../../services/sobv-polls.service";
import {Observable} from "rxjs";
import {Serviceman} from "../../interfaces";

@Component({
  selector: 'sobv-sobv-poll-modal',
  templateUrl: './sobv-poll-modal.component.html',
  styleUrls: ['./sobv-poll-modal.component.scss']
})
export class SobvPollModalComponent implements OnInit {
  public polls$: Observable<Serviceman[]> | undefined;

  constructor(private sobvPollsService: SobvPollsService) {
  }

  ngOnInit() {
    this.polls$ = this.getPollsCategory();
  }

  public getPollsCategory(): Observable<Serviceman[]> {
    return this.sobvPollsService.getPollsCategoryById();
  }
}
