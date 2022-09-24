import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validator,
  Validators,
} from '@angular/forms';

export class Customer {
  customerFormGroup: FormGroup = new FormBuilder().group({});

  CustomerName: string = '';
  CustomerAmount: number = 0;
  CustomerCode: string = '';

  constructor() {
    //single validator
    this.customerFormGroup.addControl(
      'customerNameControl',
      new FormControl('', Validators.required)
    );
    //multiple validator
    this.customerFormGroup.addControl(
      'customerCodeControl',
      new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]{4,4}$'),
        ])
      )
    );
  }
}
