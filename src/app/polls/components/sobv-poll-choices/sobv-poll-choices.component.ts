import {Component, Input, ChangeDetectorRef} from '@angular/core';
import {Choice, Question} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor(private changeDecector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.generateQuestionFormData()
    console.log(this.formChoices, 'this.formChoices')
  }

  private generateQuestionFormData() {
    this.formChoices = new FormGroup({});
    this.choices.forEach((choice) => {
      this.formChoices.addControl(`sobv-choice-${this.question.id}-name`, new FormControl('', Validators.required));
    });
    this.answersPollForm.addControl(`group-choice-${this.question.id}`, this.formChoices);
  }
}
