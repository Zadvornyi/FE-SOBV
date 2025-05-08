import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { SobvPlatoonService } from '../../services/sobv-platoon.service';
import { SobvProfileServicemanService } from '../../../profile-serviceman/services/sobv-profile-serviceman.service';
import { take } from 'rxjs';

@Component({
  selector: 'sobv-create-platoon',
  templateUrl: './sobv-create-platoon.component.html',
  styleUrls: ['./sobv-create-platoon.component.scss'],
})
export class SobvCreatePlatoonComponent implements OnInit {
  @ViewChild('modal') modalRef!: ElementRef<HTMLElement>
  private modal?: bootstrap.Modal;
  form: FormGroup;
  isSubmitFailed: boolean = false;
  errorMessage: string = '';
  servicemen: any[] = [];

  constructor(
    private fb: FormBuilder,
    private platoonService: SobvPlatoonService,
    private servicemanService: SobvProfileServicemanService
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
        console.log('Servicemen loaded:', this.servicemen);
      },
      error: (error) => {
        console.error('Error loading servicemen:', error);
      }
    });
  }


  ngAfterViewInit() {
    this.modal = new bootstrap.Modal(this.modalRef.nativeElement);
    this.modal.show();
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
    this.modal?.hide();
  }

  onOpen() {
    this.modal?.show();
  }

  onSubmit() {
    if (this.form.valid) {
      const { number, description, commander } = this.form.value;

      const platoonData = {
        sequence_number: number,
        description: description,
        commander: commander
      };

      console.log('Submitting platoon data:', platoonData);

      this.platoonService.createPlatoon(platoonData).pipe(
        take(1)
      ).subscribe({
        next: (response) => {
          console.log('Platoon created successfully:', response);
          this.isSubmitFailed = false;
          this.form.reset();
          this.onClose();
        },
        error: (error) => {
          console.error('Error creating platoon:', error);
          this.errorMessage = error.message || 'Failed to create platoon';
          this.isSubmitFailed = true;
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
