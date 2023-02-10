import {Component} from '@angular/core';
import {Observable, take} from "rxjs";
import {Category} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sobv-poll-modal',
  templateUrl: './sobv-poll-modal.component.html',
  styleUrls: ['./sobv-poll-modal.component.scss']
})
export class SobvPollModalComponent {
  public categoryData: Category | undefined;

  constructor(
    private sobvPollsService: SobvPollsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (!params.categoryId) return
        this.getPollsCategory(params.categoryId).pipe(take(1)).subscribe((resp)=>{
          this.categoryData = resp
        });
      }
    );

  }

  public getPollsCategory(categoryId: number): Observable<Category> {
    return this.sobvPollsService.getPollsCategoryById(categoryId);
  }

}
