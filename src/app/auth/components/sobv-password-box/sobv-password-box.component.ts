import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '../sobv-text-box/sobv-text-box.component';

const MY_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SobvPasswordBoxComponent),
  multi: true
};

@Component({
  selector: 'sobv-password-box',
  templateUrl: './sobv-password-box.component.html',
  styleUrls: ['./sobv-password-box.component.scss']
})
export class SobvPasswordBoxComponent {
  @Input() title = "";
  @Input() value = "";
  @Input() isVisible = false;

  onToggle () {
    this.isVisible = !this.isVisible; 
  }
  
  onChange (text: string) {    
    this.value = text;    
  }

  getInputType (): InputType  {
    return this.isVisible ? "text" : "password"
  }
}
