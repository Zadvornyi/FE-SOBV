import {Component, Input} from '@angular/core';
import {Choice} from "../../interfaces";

@Component({
  selector: 'sobv-poll-choices',
  templateUrl: './sobv-poll-choices.component.html',
  styleUrls: ['./sobv-poll-choices.component.scss']
})
export class SobvPollChoicesComponent {
  @Input() choices: Choice[] | undefined;

  constructor() {
  }

}
