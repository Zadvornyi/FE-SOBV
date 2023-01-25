import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'sobv-create-platoon',
  templateUrl: './sobv-create-platoon.component.html',
  styleUrls: ['./sobv-create-platoon.component.scss'],
})
export class SobvCreatePlatoonComponent implements OnInit {
  private modal: any;
  
  form = new FormGroup({
    number: new FormControl('', [Validators.required, Validators.minLength(3)]),
    comander: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[а-яА-Яa-zA-ZіІ\s]+$/)]),
  });

  ngOnInit() {
    this.modal = new bootstrap.Modal(
      document.getElementById('modal-create-platoon') as HTMLElement
    );

    this.modal.show();
  }

  isNumberValid (): boolean {
    return Boolean(this.form.get('number')?.invalid && this.form.get('number')?.touched)
  }

  isComanderValid (): boolean {
    return Boolean(this.form.get('comander')?.invalid && this.form.get('comander')?.touched)
  }
  handleClose() {
    this.modal.hide();
  }

  handleOpen() {
    this.modal.show();
  }

  handleSubmit() {
    console.log(this.form.value);
  }
}
