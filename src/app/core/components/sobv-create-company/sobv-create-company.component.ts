import {Component, ElementRef, ViewChild} from '@angular/core';
import * as bootstrap from "bootstrap";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { SobvCompanyService } from '../../services/sobv-company.service';
import { take } from 'rxjs';
import {SobvProfileServicemanService} from "../../../profile-serviceman/services/sobv-profile-serviceman.service";

@Component({
  selector: 'sobv-create-company',
  templateUrl: './sobv-create-company.component.html',
  styleUrls: ['./sobv-create-company.component.scss']
})
export class SobvCreateCompanyComponent {
  @ViewChild('modal') modalRef!: ElementRef<HTMLElement>
  private modal?: bootstrap.Modal;
  form: FormGroup;
  isSubmitFailed: boolean = false;
  isSubmitSuccess: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  servicemen: any[] = [];


  constructor(
    private fb: FormBuilder,
    private companyService: SobvCompanyService,
    private servicemanService: SobvProfileServicemanService,
  ) {
    this.form = this.fb.group({
      number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      description: new FormControl(''),
      commander: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    this.loadServicemen();
  }

  loadServicemen() {
    this.servicemanService.getServicemen().pipe(
      take(1)
    ).subscribe({
      next: (response) => {
        this.servicemen = response;
      }
    });
  }


  ngAfterViewInit () {
    this.modal = new bootstrap.Modal(this.modalRef.nativeElement);
  }

  getControlNumber(): FormControl {
    return this.form.get('number') as FormControl;
  }

  getControlCommander(): FormControl {
    return this.form.get('commander') as FormControl;
  }

  getControlDescription(): FormControl {
    return this.form.get('description') as FormControl;
  }

  onClose() {
    this.isSubmitFailed = false;
    this.isSubmitSuccess = false;
    this.modal?.hide();
  }

  onOpen() {
    this.modal?.show();
  }

  onSubmit() {
    if (this.form.valid) {
      const { number, description, commander } = this.form.value;

      const companyData = {
        sequence_number: number,
        description: description,
        commander: commander
      };

      this.companyService.createCompany(companyData).pipe(
        take(1)
      ).subscribe({
        next: (response) => {
          this.isSubmitSuccess = true;
          this.successMessage = 'Company created successfully';
          this.form.reset();
          this.onClose();
        },
        error: (error) => {
          this.isSubmitFailed = true;
          this.errorMessage = error.message || 'Failed to create company';
        }
      });
    } else {
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        control?.markAsTouched();
      });
    }
  }
}
