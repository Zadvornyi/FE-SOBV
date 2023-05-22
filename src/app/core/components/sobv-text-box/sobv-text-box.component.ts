import { Component, Input } from '@angular/core';
import {AbstractControl, FormControl, ɵFormGroupRawValue, ɵGetProperty, ɵTypedOrUntyped} from '@angular/forms';

export type InputType = "text" | "password" | "email";
const DEFAULT_INPUT_TYPE = "text";

@Component({
  selector: 'sobv-text-box',
  templateUrl: './sobv-text-box.component.html',
  styleUrls: ['./sobv-text-box.component.scss'],
})
export class SobvTextBoxComponent {
  @Input() type: InputType = DEFAULT_INPUT_TYPE;
  @Input() title?: string;
  @Input() id?:string;
  @Input() inputClass?: string;
  @Input()
  set control(v: string | FormControl | AbstractControl | null ){
    if (typeof v === "string") {
      this.formControl.setValue( "");
    } else {
      this.formControl = v as FormControl;
    }
  }

  formControl: FormControl = new FormControl("");
}
