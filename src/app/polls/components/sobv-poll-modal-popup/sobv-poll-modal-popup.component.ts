import { Component, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'sobv-poll-modal-popup',
  templateUrl: './sobv-poll-modal-popup.component.html',
  styleUrls: ['./sobv-poll-modal-popup.component.scss']
})
export class SobvPollModalPopupComponent {
	closeResult = '';

  constructor(private modalService: NgbModal) {}

	next () {
	}

	submit () {
	}

  open(content: any) {
		this.modalService.open(content, { fullscreen: true }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
