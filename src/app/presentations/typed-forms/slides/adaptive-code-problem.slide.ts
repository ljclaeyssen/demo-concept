import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-adaptive-code-problem-slide',
  templateUrl: './adaptive-code-problem.slide.html',
  styleUrl: './adaptive-code-problem.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdaptiveCodeProblemSlide {
  formCreation = signal(`export class UserFormComponent implements OnInit {
  form!: FormGroup;
  private destroyRef = inject(DestroyRef);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      gender: [''],
      firstName: [''],
      lastName: [''],
      maidenName: ['']
    });

    this.setupAdaptiveLogic();
  }
}`);

  adaptiveLogic = signal(`setupAdaptiveLogic() {
  // ❌ Code métier dans le component, pas séparé !
  // ❌ Risque de typos sur les noms de champs
  // ❌ Pas de typage sur les valeurs
  // ❌ Verbeux et répétitif

  this.form.get('gender')?.valueChanges
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(gender => {
      const maidenNameControl = this.form.get('maidenName');

      if (gender === 'male') { // ❌ String literal, pas typé !
        maidenNameControl?.disable();
        maidenNameControl?.clearValidators();
      } else {
        maidenNameControl?.enable();
        maidenNameControl?.setValidators([Validators.required]);
      }

      maidenNameControl?.updateValueAndValidity();
    });
}`);
}
