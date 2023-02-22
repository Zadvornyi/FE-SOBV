import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Report} from "../interfaces";

@Injectable()
export class SobvPollQuestionsFormService {
  public answersPollForm!: FormGroup
  public activeReport?: Report;

  constructor(private formBuilder: FormBuilder) {
    this.answersPollForm = this.formBuilder.group({})
  }


}
