import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-input-output-slide',
  templateUrl: './input-output.slide.html',
  styleUrl: './input-output.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputOutputSlide {
  oldInputCode = signal(`// ❌ Ancienne syntaxe avec décorateurs
@Component({...})
export class UserCardComponent {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input({ required: true }) id!: string;
}`);

  newInputCode = signal(`// ✅ Nouvelle syntaxe avec input()
import { input } from '@angular/core';

@Component({...})
export class UserCardComponent {
  name = input('');           // InputSignal<string>
  age = input(0);             // InputSignal<number>
  id = input.required<string>(); // Requis !

  // C'est un signal ! On lit avec ()
  // {{ name() }} dans le template
}`);

  oldOutputCode = signal(`// ❌ Ancienne syntaxe
@Component({...})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<void>();
  @Output() valueChange = new EventEmitter<string>();

  onClick() {
    this.clicked.emit();
  }
}`);

  newOutputCode = signal(`// ✅ Nouvelle syntaxe avec output()
import { output } from '@angular/core';

@Component({...})
export class ButtonComponent {
  clicked = output<void>();
  valueChange = output<string>();

  onClick() {
    this.clicked.emit();
  }
}

// Plus besoin d'importer EventEmitter !`);

  usageCode = signal(`// Utilisation dans le parent
@Component({
  template: \`
    <app-user-card
      [name]="userName()"
      [age]="userAge()"
      [id]="userId()"
      (clicked)="handleClick()"
      (valueChange)="handleValue($event)"
    />
  \`
})
export class ParentComponent {
  userName = signal('Alice');
  userAge = signal(25);
  userId = signal('u-123');
}`);
}
