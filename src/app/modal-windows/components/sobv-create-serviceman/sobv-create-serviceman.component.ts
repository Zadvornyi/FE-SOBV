import { Component } from '@angular/core';
import * as bootstrap from "bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'sobv-create-serviceman',
  templateUrl: './sobv-create-serviceman.component.html',
  styleUrls: ['./sobv-create-serviceman.component.scss']
})
export class SobvCreateServicemanComponent {
  private modal?: bootstrap.Modal;

  form = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    surname_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    aliases: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    platoon: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.modal = new bootstrap.Modal(
      document.getElementById('modal-create-company') as HTMLElement
    );

    this.modal.show();
  }

  getControlFirstName(): FormControl {
    return this.form.get('first_name') as FormControl;
  }
  getControlSurnameName(): FormControl {
    return this.form.get('surname_name') as FormControl;
  }
  getControlLastName(): FormControl {
    return this.form.get('last_name') as FormControl;
  }
  getControlAliases(): FormControl {
    return this.form.get('aliases') as FormControl;
  }
  getControlCompany(): FormControl {
    return this.form.get('company') as FormControl;
  }
  getControlPlatoon(): FormControl {
    return this.form.get('platoon') as FormControl;
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
