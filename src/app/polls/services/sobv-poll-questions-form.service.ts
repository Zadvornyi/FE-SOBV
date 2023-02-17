import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Injectable()
export class SobvPollQuestionsFormService {
  public answersPollForm!: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.answersPollForm = this.formBuilder.group({})
  }


}
