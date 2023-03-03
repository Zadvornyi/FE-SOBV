import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'sobv-create-company',
  templateUrl: './sobv-create-company.component.html',
  styleUrls: ['./sobv-create-company.component.scss']
})
export class SobvCreateCompanyComponent {
  private modal?: bootstrap.Modal;

  form = new FormGroup({
    number: new FormControl('', [Validators.required]),
    commander: new FormControl('', [Validators.required, Validators.pattern(/^[а-яА-Яa-zA-ZіІ\s]+$/)]),
  });

  ngOnInit() {
    this.modal = new bootstrap.Modal(
      document.getElementById('modal-create-company') as HTMLElement
    );

    this.modal.show();
  }

  getControlNumber(): FormControl {
    return this.form.get('number') as FormControl;
  }

  getControlCommander (): FormControl {
    return this.form.get('commander') as FormControl;
  }

  onClose() {
    this.modal?.hide();
  }

  onOpen() {
    this.modal?.show();
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
