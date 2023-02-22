import {Component, OnInit} from '@angular/core';
import {SobvProfileServicemanService} from "../../services/sobv-profile-serviceman.service";
import {Category} from "../../../polls/interfaces";
import {SobvPollsService} from "../../../polls/services/sobv-polls.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, take} from "rxjs";

@Component({
  selector: 'sobv-profile-serviceman',
  templateUrl: './sobv-profile-serviceman.component.html',
  styleUrls: ['./sobv-profile-serviceman.component.scss']
})
export class SobvProfileServicemanComponent implements OnInit {
  public categories: Category[] | undefined;
  public servicemanId?: string;

  constructor(
    private sobvProfileServicemanService: SobvProfileServicemanService,
    private sobvPollsService: SobvPollsService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (!params) return
        this.servicemanId = params.servicemanId;
        this.getPollsCategories().pipe(take(1)).subscribe((resp) => {
          this.categories = resp
        });
      }
    );

  }

  public getPollsCategories(): Observable<Category[]> {
    return this.sobvPollsService.getPollsCategories();
  }

  public startPoll(category: Category): void {
    this.sobvPollsService.getPollsCategoryById(category.id as string).pipe(take(1)).subscribe((resp) => {
      const firstPoll = (resp.polls) ? resp.polls[0] : undefined;
      if (firstPoll) {
        this.router.navigate([`profile/serviceman/${this.servicemanId}/category/${category.id}`]);
      }
    });
  }
}
