import {Component, ElementRef, ViewChild} from '@angular/core';
import * as bootstrap from "bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

const NAME_PATTERN = /^[а-яА-Яa-zA-ZіІ\s]+$/;
@Component({
  selector: 'sobv-create-serviceman',
  templateUrl: './sobv-create-serviceman.component.html',
  styleUrls: ['./sobv-create-serviceman.component.scss']
})
export class SobvCreateServicemanComponent {
  @ViewChild('modal') modalRef!: ElementRef<HTMLElement>
  private modal?: bootstrap.Modal;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      surname: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)], ),
      name: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)], ),
      fatherName: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)], ),
      aliases: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)]),
      company: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)]),
      platoon: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)]),
    })
  }

  ngAfterViewInit () {
    this.modal = new bootstrap.Modal(this.modalRef.nativeElement);
    this.modal.show();
  }

  // getControlNumber(): FormControl {
  //   return this.form.get('number') as FormControl;
  // }
  //
  // getControlCommander(): FormControl {
  //   return this.form.get('commander') as FormControl;
  // }

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
