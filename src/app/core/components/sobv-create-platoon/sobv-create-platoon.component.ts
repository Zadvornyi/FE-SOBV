import { Component, OnInit } from '@angular/core';
import * as bootstrap from "bootstrap";

@Component({
  selector: 'sobv-create-platoon',
  templateUrl: './sobv-create-platoon.component.html',
  styleUrls: ['./sobv-create-platoon.component.scss']
})
export class SobvCreatePlatoonComponent implements OnInit {
  private modal: any;

  ngOnInit() {
    this.modal = new bootstrap.Modal(
      document.getElementById("modal-create-platoon") as HTMLElement
    )
    
    this.modal.show();
  }

  handleClose () {
    this.modal.hide();
  }
  handleOpen () {
    this.modal.show();
  }
}
