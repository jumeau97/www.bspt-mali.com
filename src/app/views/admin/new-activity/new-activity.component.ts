import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss'],
})
export class NewActivityComponent {
  myForm: FormGroup | any;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private generalService: GeneralService) {
    this.myForm = this.fb.group({
      name: [, [Validators.required]],
      description: [, [Validators.required]],
    });
  }

  error_messages = {
    name: [{ type: 'required', message: 'le champs est réquis' }],
    description: [{ type: 'required', message: 'le champs est réquis' }],
  };

  addNewActivity() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.generalService.addNewActivity(this.myForm.value).subscribe({
        next: (result: any) => {
          console.log('result', result);
        },
        error: (error: any) => {},
        complete: () => {
          this.submitted = false;
        },
      });
    }
  }
}
