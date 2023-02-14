import {Component, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from "@angular/router";
import {take} from "rxjs";

@Component({
  selector: 'sobv-poll-modal-popup',
  templateUrl: './sobv-poll-modal-popup.component.html',
  styleUrls: ['./sobv-poll-modal-popup.component.scss']
})
export class SobvPollModalPopupComponent {
  @ViewChild('contentPopup') templatePopupRef!: TemplateRef<Element>;
  private modalInstace!: NgbModalRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.modalInstace = this.modalService.open(this.templatePopupRef, {fullscreen: true})
  }

  next() {
  }

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

}
