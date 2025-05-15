import {Component, ElementRef, ViewChild} from '@angular/core';
import * as bootstrap from "bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SobvProfileServicemanService} from "../../../profile-serviceman/services/sobv-profile-serviceman.service";

const NAME_PATTERN = /^[а-яА-Яa-zA-ZіІ\s]+$/;
@Component({
  selector: 'sobv-create-serviceman',
  templateUrl: './sobv-create-serviceman.component.html',
  styleUrls: ['./sobv-create-serviceman.component.scss']
})
export class SobvCreateServicemanComponent {
  @ViewChild('modal') modalRef!: ElementRef<HTMLElement>
  private modal?: bootstrap.Modal;
  form: FormGroup;
  isSubmitSuccess = false;
  isSubmitFailed = false;
  successMessage = '';
  errorMessage = '';
  platoonId: string = '';
  companyId: string = '';

  constructor(
    private fb: FormBuilder,
    private servicemanService: SobvProfileServicemanService,
  ) {
    this.form = this.fb.group({
      surname: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)], ),
      name: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)], ),
      fatherName: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)], ),
      aliases: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)]),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  ngAfterViewInit () {
    this.modal = new bootstrap.Modal(this.modalRef.nativeElement);
  }

  onClose() {
    this.modal?.hide();
    this.isSubmitSuccess = false;
    this.isSubmitFailed = false;
  }

  onOpen(platoonId?: string, companyId?: string) {
    if (platoonId && companyId) {
      this.platoonId = platoonId;
      this.companyId = companyId;
    }
    this.modal?.show();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const formData = this.form.value;
    const serviceman = {
      first_name: formData.name,
      last_name: formData.surname,
      surname_name: formData.fatherName,
      aliases: formData.aliases,
      email: formData.email,
      platoon: this.platoonId,
      company: this.companyId
    };

    this.servicemanService.createServiceman(serviceman).subscribe(
      (response) => {
        this.isSubmitSuccess = true;
        this.successMessage = 'Бійця успішно створено!';
        this.form.reset();
        this.onClose();
      },
      (error) => {
        this.isSubmitFailed = true;
        this.errorMessage = error.message || 'Помилка в створенні бійця';
      }
    );
  }
}
