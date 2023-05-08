import { Component } from '@angular/core';
import * as bootstrap from "bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'sobv-create-serviceman',
  templateUrl: './sobv-create-serviceman.component.html',
  styleUrls: ['./sobv-create-serviceman.component.scss']
})
export class SobvCreateServicemanComponent {
  private modal?: bootstrap.Modal;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      number: new FormControl('', [Validators.required]),
      commander: new FormControl('', [Validators.required, Validators.pattern(/^[а-яА-Яa-zA-ZіІ\s]+$/)]),
    })
  }


  ngOnInit() {
    this.modal = new bootstrap.Modal(
      document.getElementById('modal-create-platoon') as HTMLElement
    );

    this.modal.show();
  }

  getControlNumber(): FormControl {
    return this.form.get('number') as FormControl;
  }

  getControlCommander(): FormControl {
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
