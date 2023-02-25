import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input() control: FormControl = new FormControl();
  
  
}
