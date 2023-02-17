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
  public formChoices!:FormGroup;

  constructor(private changeDecector: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.generateQuestionFormData()
  }

  ngOnChanges() {
    this.changeDecector.detectChanges()
  }

  private generateQuestionFormData() {
    this.formChoices = new FormGroup({});
    this.choices.forEach((choice) => {
      const nCtrol = {
        name: `sobv-choice-${this.question.id}-${choice.id}`,
        control: new FormControl(choice.value, Validators.required)
      };
      this.formChoices.addControl(`sobv-choice-${this.question.id}-name`, nCtrol.control);
    });
    this.answersPollForm.addControl(`group-choice-${this.question.id}`, this.formChoices);
  }
}
