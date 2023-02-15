import {Component, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable, take} from "rxjs";
import {LinkedList, NodeList} from "../../../core/utils/linked-list";
import {Category, Poll} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";

@Component({
  selector: 'sobv-poll-modal-popup',
  templateUrl: './sobv-poll-modal-popup.component.html',
  styleUrls: ['./sobv-poll-modal-popup.component.scss']
})
export class SobvPollModalPopupComponent {
  @ViewChild('contentPopup') templatePopupRef!: TemplateRef<Element>;
  private modalInstace!: NgbModalRef;
  public categoryData?: Category;
  public pollList?: LinkedList;
  public activePollList?: NodeList;
  public params?: Params;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private sobvPollsService: SobvPollsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        if (!params.categoryId) return
        this.params = params;
        this.getCategoryById(params.categoryId).pipe(take(1)).subscribe((resp) => {
          this.categoryData = resp;
          if (this.categoryData.polls?.length) {
            this.pollList = this.initPollList(this.categoryData.polls);
            this.setPoll(this.categoryData.polls[0].id);
          }

        });
      }
    );


  }

  ngAfterViewInit() {
    this.modalInstace = this.modalService.open(this.templatePopupRef, {fullscreen: true})
  }

  back () {
    if (!this.activePollList?.previous) return;

    this.setPoll(this.activePollList.previous.data.id)
  };

  next () {
    if (!this.activePollList?.next) return;

    this.setPoll(this.activePollList.next.data.id)
  };
  submit() {
  }

  public closePopUp() {
    this.route.params.subscribe(params => {
        if (!params) return
        this.router.navigate([`profile/serviceman/${params.id}`]);
        this.modalInstace.close()
      }
    );
  }

  private setPoll(pollId: any) {
    if (!pollId) return;

    this.router.navigate([`profile/serviceman/${this.params?.id}/category/${this.params?.categoryId}/poll/${pollId}`]);
    this.activePollList = this.pollList?.findAtPath(pollId, 'data.id');
  }

  private initPollList(array: Poll[]) {
    let pollList = new LinkedList();

    array.forEach((item) => {
      pollList.add(item)
    });

    return pollList;
  }

  public getCategoryById(categoryId: number): Observable<Category> {
    return this.sobvPollsService.getPollsCategoryById(categoryId);
  }

}
