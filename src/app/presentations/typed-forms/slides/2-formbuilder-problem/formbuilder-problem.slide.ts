import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-formbuilder-problem-slide',
  templateUrl: './formbuilder-problem.slide.html',
  styleUrl: './formbuilder-problem.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormBuilderProblemSlide {
  formCreation = signal(`export class UserProfileComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // ❌ Obligé d'utiliser un lifecycle hook !
    this.form = this.fb.group({
      name: [''],
      email: [''],
      age: [null]
    });
  }
}`);

  formUsage = signal(`// ❌ form.value est 'any' ou 'Partial<unknown>'
const data = this.form.value;
console.log(data.emial); // Typo ! Pas d'erreur TS

// ❌ get() sans typage, risque de typo
const emailControl = this.form.get('emial'); // Pas d'erreur !

// ❌ patchValue sans typage
this.form.patchValue({
  nam: 'John',      // Typo ! Pas d'erreur
  email: 123,       // Type invalide ! Pas d'erreur
  unknownField: 42  // Champ inexistant ! Pas d'erreur
});

// ❌ getRawValue() aussi sans typage
const rawData = this.form.getRawValue(); // any
`);
}
