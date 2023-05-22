import {Component, ElementRef, ViewChild} from '@angular/core';
import * as bootstrap from "bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'sobv-create-company',
  templateUrl: './sobv-create-company.component.html',
  styleUrls: ['./sobv-create-company.component.scss']
})
export class SobvCreateCompanyComponent {
  @ViewChild('modal') modalRef!: ElementRef<HTMLElement>
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

  ngAfterViewInit () {
    this.modal = new bootstrap.Modal(this.modalRef.nativeElement);
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
