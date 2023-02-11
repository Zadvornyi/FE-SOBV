import {Component, OnInit} from '@angular/core';
import {SobvProfileServicemanService} from "../../services/sobv-profile-serviceman.service";
import {Category} from "../../../polls/interfaces";
import {SobvPollsService} from "../../../polls/services/sobv-polls.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, take} from "rxjs";

@Component({
  selector: 'sobv-profile-serviceman',
  templateUrl: './sobv-profile-serviceman.component.html',
  styleUrls: ['./sobv-profile-serviceman.component.scss']
})
export class SobvProfileServicemanComponent implements OnInit {
  public categories: Category[] | undefined;

  constructor(
    private sobvProfileServicemanService: SobvProfileServicemanService,
    private sobvPollsService: SobvPollsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (!params) return
        this.getPollsCategories().pipe(take(1)).subscribe((resp) => {
          this.categories = resp
        });
      }
    );

  }

  public getPollsCategories(): Observable<Category[]> {
    return this.sobvPollsService.getPollsCategories();
  }


}
