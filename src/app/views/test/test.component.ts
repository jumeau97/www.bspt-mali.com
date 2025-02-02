import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  currentStep = 0;
  steps = [
    { label: 'Étape 1', completed: false },
    { label: 'Étape 2', completed: false },
    { label: 'Étape 3', completed: false },
  ];

  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      raisonSociale: ['', Validators.required],
      anneeCreation: ['', Validators.required],
    });

    this.secondFormGroup = this.fb.group({
      ville: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    this.thirdFormGroup = this.fb.group({
      activitePrincipale: ['', Validators.required],
    });
  }

  nextStep() {
    if (this.currentStep === 0 && this.firstFormGroup.valid) {
      this.steps[this.currentStep].completed = true;
      this.currentStep++;
    } else if (this.currentStep === 1 && this.secondFormGroup.valid) {
      this.steps[this.currentStep].completed = true;
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  goToStep(index: number) {
    if (index < this.currentStep) {
      this.currentStep = index;
    }
  }

  submitForm() {
    if (this.thirdFormGroup.valid) {
      const finalData = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
        ...this.thirdFormGroup.value,
      };
      console.log('Données finales :', finalData);
    }
  }

}
