import {Component, Input} from '@angular/core';
import {Choice, Question} from "../../interfaces";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'sobv-poll-choices',
  templateUrl: './sobv-poll-choices.component.html',
  styleUrls: ['./sobv-poll-choices.component.scss']
})
export class SobvPollChoicesComponent {
  @Input() choices!: Choice[];
  @Input() question!: Question;
  @Input() answersPollForm!: FormGroup;
  public formChoices!: FormGroup;

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.generateQuestionFormData()
  }

  private generateQuestionFormData() {
    const formDataObj:any = {};
    formDataObj[`sobv-question-choice-${this.question.id}`] = [null, [Validators.required]];
    this.formChoices = this.fb.group(formDataObj);
    this.answersPollForm.addControl(`group-question-choice-${this.question.id}`, this.formChoices);
  }
}
