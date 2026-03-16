import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-custom-controls-slide',
  templateUrl: './custom-controls.slide.html',
  styleUrl: './custom-controls.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomControlsSlide {
  reactiveCode = signal(`@Component({
  selector: 'ds-code-postal',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(
      () => CodePostalComponent
    ),
    multi: true
  }],
  template: \`
    <input [value]="value"
      (input)="onInput($event)"
      (blur)="onTouched()" />
  \`
})
export class CodePostalComponent
  implements ControlValueAccessor {

  value = '';
  onChange: (v: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(v: string) {
    this.value = v ?? '';
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean) {
    // gérer le disabled...
  }

  onInput(event: Event) {
    const val =
      (event.target as HTMLInputElement).value;
    this.value = val.replace(/\\D/g, '').slice(0, 5);
    this.onChange(this.value);
  }
}`);

  signalCode = signal(`@Component({
  selector: 'ds-code-postal',
  template: \`
    <input [value]="value()"
      (input)="onInput($event)" />
  \`
})
export class CodePostalComponent
  implements FormValueControl<string> {

  // Seul contrat : un model() signal
  value = model('');

  onInput(event: Event) {
    const val =
      (event.target as HTMLInputElement).value;
    this.value.set(
      val.replace(/\\D/g, '').slice(0, 5)
    );
  }
}

// Usage : <ds-code-postal [formField]="f.cp" />
// Pas de CVA, pas de forwardRef, pas de provider
// disabled/touched/errors sync automatique`);
}
