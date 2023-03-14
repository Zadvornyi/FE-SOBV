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

  onToggle () {
    this.isVisible = !this.isVisible; 
  }

  getInputType (): InputType  {
    return this.isVisible ? "text" : "password"
  }

  getEyeClass() {
    return this.isVisible ? 'bi-eye' : 'bi-eye-slash'
  }
}