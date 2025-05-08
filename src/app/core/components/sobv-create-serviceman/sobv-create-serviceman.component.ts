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
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

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
      company: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)]),
      platoon: new FormControl('', [Validators.required, Validators.pattern(NAME_PATTERN)]),
    })
  }

  ngAfterViewInit () {
    this.modal = new bootstrap.Modal(this.modalRef.nativeElement);
    //this.modal.show();
  }

  onClose() {
    this.modal?.hide();
  }

  onOpen() {
    this.modal?.show();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.isSubmitting = true;

    const formData = this.form.value;
    const serviceman = {
      first_name: formData.name,
      last_name: formData.surname,
      surname_name: formData.fatherName,
      aliases: formData.aliases,
      email: formData.email,
      company: formData.company,
      platoon: formData.platoon
    };

    this.servicemanService.createServiceman(serviceman).subscribe(
      (response) => {
        this.isSubmitting = false;
        this.successMessage = 'Сервісмена успішно створено!';
        setTimeout(() => {
          this.onClose();
        }, 2000);
      },
      (error) => {
        this.isSubmitting = false;
        this.errorMessage = 'Помилка при створенні сервісмена. Спробуйте ще раз.';
        console.error('Error creating serviceman:', error);
      }
    );
  }
}
