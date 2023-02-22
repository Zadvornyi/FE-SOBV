import {Component, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {mergeMap, Observable, take, tap} from "rxjs";
import {map} from "rxjs/operators"
import {LinkedList, NodeList} from "../../../core/utils/linked-list";
import {Answer, Category, Poll, Report} from "../../interfaces";
import {SobvPollsService} from "../../services/sobv-polls.service";
import {SobvPollQuestionsFormService} from "../../services/sobv-poll-questions-form.service";
import {FormGroup} from "@angular/forms";

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
  public categoryId?: string;
  public servicemanId?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public pollFormService: SobvPollQuestionsFormService,
    private sobvPollsService: SobvPollsService) {
  }

  ngOnInit() {
    this.servicemanId = this.route.snapshot.paramMap.get('servicemanId') as string
    this.categoryId = this.route.snapshot.paramMap.get('categoryId') as string


    this.getCategoryById(this.categoryId as string).pipe(
      take(1)
    ).subscribe((resp) => {
      this.categoryData = resp;
      if (this.categoryData.polls?.length) {
        this.pollList = this.initPollList(this.categoryData.polls);
        this.setPoll(this.categoryData.polls[0].id);
      }
    })
  }

  ngAfterViewInit() {
    this.modalInstace = this.modalService.open(this.templatePopupRef, {fullscreen: true})
  }

  back() {
    if (!this.activePollList?.previous) return;

    this.setPoll(this.activePollList.previous.data.id)
  };

  next() {
    if (!this.activePollList?.next) return;

    this.setPoll(this.activePollList.next.data.id)
  };

  submitReport() {
    let submitData: Answer[] = [];

    if(this.pollFormService.answersPollForm.valid) {
      Object.keys(this.pollFormService.answersPollForm.controls).forEach((key: string) => {
        // Get a reference to the control using the FormGroup.get() method
        const abstractControl = this.pollFormService.answersPollForm.get(key);
        const questionId = key.split('group-question-choice-')[1];
        const choiceValue = abstractControl?.value[`sobv-question-choice-${questionId}`];

        let tmpAnswerData = {
          serviceman: this.servicemanId,
          report: this.pollFormService.activeReport?.id,
          choice: choiceValue,
          question: questionId
        }
        submitData.push(tmpAnswerData as Answer)
      });
      this.sobvPollsService.bulkServicemanPollAnswers(submitData).subscribe();
    }


  }

  public closePopUp() {
    this.route.params.subscribe(params => {
        if (!params) return
        this.router.navigate([`profile/serviceman/${params.servicemanId}`]);
        this.modalInstace.close()
      }
    );
  }

  private setPoll(pollId: any) {
    if (!pollId) return;
    this.router.navigate([`profile/serviceman/${this.servicemanId}/category/${this.categoryId}/poll/${pollId}`]);

    this.activePollList = this.pollList?.findAtPath(pollId, 'data.id');
  }

  private initPollList(array: Poll[]) {
    let pollList = new LinkedList();

    array.forEach((item) => {
      pollList.add(item)
    });

    return pollList;
  }

  public getCategoryById(categoryId: string): Observable<Category> {
    return this.sobvPollsService.getPollsCategoryById(categoryId);
  }

}
