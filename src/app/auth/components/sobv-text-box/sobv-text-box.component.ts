import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType = "text" | "password";


@Component({
  selector: 'sobv-text-box',
  templateUrl: './sobv-text-box.component.html',
  styleUrls: ['./sobv-text-box.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SobvTextBoxComponent),
      multi: true
  }]
})
export class SobvTextBoxComponent implements ControlValueAccessor {
  private innerValue: string = "";

  @Input() type: InputType = "text"
  @Input() value: string = "";
  @Input() title: string = "";
  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  onValueChange(event: any) {
    const newValue = event.target.value;
    this.value = newValue;
    this.onChangeCallback(newValue);
    this.valueChange.emit(newValue);
  }

}
