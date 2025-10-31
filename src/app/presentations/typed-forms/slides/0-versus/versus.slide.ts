import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-versus-slide',
  templateUrl: './versus.slide.html',
  styleUrl: './versus.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VersusSlide {
  formBuilderCode = signal(`export class UserFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: [null]
    });
  }
}`);

  formGroupCode = signal(`enum UserFormFields {
  NAME = 'name',
  EMAIL = 'email',
  AGE = 'age'
}

export class UserForm extends FormGroup {
  constructor() {
    super({
      [UserFormFields.NAME]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      [UserFormFields.EMAIL]: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      [UserFormFields.AGE]: new FormControl<number | null>(null)
    });
  }

  get name() {
    return this.get(UserFormFields.NAME) as FormControl<string>;
  }

  get email() {
    return this.get(UserFormFields.EMAIL) as FormControl<string>;
  }

  get age() {
    return this.get(UserFormFields.AGE) as FormControl<number | null>;
  }
}`);
}
