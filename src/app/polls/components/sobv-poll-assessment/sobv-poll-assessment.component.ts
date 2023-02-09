import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SobvSubHeaderComponent } from 'src/app/core/components/sobv-sub-header/sobv-sub-header.component';
import { Poll } from '../../interfaces';
import { SobvPollsService } from '../../services/sobv-polls.service';

@Component({
  selector: 'sobv-poll-assessment',
  templateUrl: './sobv-poll-assessment.component.html',
  styleUrls: ['./sobv-poll-assessment.component.scss'],
})
export class SobvPollAssessmentComponent implements OnInit {
  columns: string[];
  public polls$: Observable<Poll[]> | undefined;

  constructor(private sobvPollsService: SobvPollsService,
    private route: ActivatedRoute) {
    
    this.columns = [
      '01 Лип 2022',
      '15 Лип 2022',
      '01 Сер 2022',
      '16 Сер 2022',
      '01 Вер 2022',
      '16 Вер 2022',
    ];
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (!params.categoryId) return
        this.polls$ = this.getPollsCategory(params.categoryId);
      }
    );

  }

}
