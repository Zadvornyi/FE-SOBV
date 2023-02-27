import { Component, Input } from '@angular/core';

const DEFUALT_TITLE = "Оцінка МПЗ підрозділу";

@Component({
  selector: 'sobv-sub-header',
  templateUrl: './sobv-sub-header.component.html',
  styleUrls: ['./sobv-sub-header.component.scss']
})
export class SobvSubHeaderComponent {
  @Input() title: string = DEFUALT_TITLE;
}
