import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '../sobv-text-box/sobv-text-box.component';

@Component({
  selector: 'sobv-password-box',
  templateUrl: './sobv-password-box.component.html',
  styleUrls: ['./sobv-password-box.component.scss']
})
export class SobvPasswordBoxComponent {
  @Input() title = "";
  @Input() isVisible = false;
  @Input() control: FormControl = new FormControl();
  @Input() id?: string;


  onToggle () {
    this.isVisible = !this.isVisible;
  }

  get inputType (): InputType  {
    return this.isVisible ? "text" : "password"
  }

  get eyeClass() {
    return this.isVisible ? 'bi-eye' : 'bi-eye-slash'
  }
}
