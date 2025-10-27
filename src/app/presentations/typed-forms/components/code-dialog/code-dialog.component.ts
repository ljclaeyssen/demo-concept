import {Component, ChangeDetectionStrategy, signal, inject} from '@angular/core';
import {Highlight} from 'ngx-highlightjs';
import {DynamicDialogConfig, DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ButtonModule} from 'primeng/button';
import {
  contactFormTs,
  registrationDemoComponentHtml,
  registrationDemoComponentScss,
  registrationDemoComponentTs,
  registrationFormEnums,
  registrationFormOptions,
  registrationFormTs,
  situationFormTs
} from '../../generated-code.constants';

@Component({
  selector: 'app-code-dialog',
  templateUrl: './code-dialog.component.html',
  styleUrl: './code-dialog.component.scss',
  providers: [DialogService],
  imports: [Highlight, ButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeDialogComponent {
  private ref = inject(DynamicDialogRef);

  selectedCode = signal<'enums' | 'options' | 'contact' | 'situation' | 'registration' | 'component' | 'template' | 'styles'>('enums');

  codeMap = {
    enums: {content: registrationFormEnums, label: 'Enums', language: 'typescript'},
    options: {content: registrationFormOptions, label: 'Options', language: 'typescript'},
    contact: {content: contactFormTs, label: 'ContactForm', language: 'typescript'},
    situation: {content: situationFormTs, label: 'SituationForm', language: 'typescript'},
    registration: {content: registrationFormTs, label: 'RegistrationForm', language: 'typescript'},
    component: {content: registrationDemoComponentTs, label: 'Component TS', language: 'typescript'},
    template: {content: registrationDemoComponentHtml, label: 'Template', language: 'html'},
    styles: {content: registrationDemoComponentScss, label: 'Styles', language: 'scss'}
  };

  constructor(public config: DynamicDialogConfig) {}

  get currentCode() {
    return this.codeMap[this.selectedCode()];
  }

  selectCode(code: 'enums' | 'options' | 'contact' | 'situation' | 'registration' | 'component' | 'template' | 'styles') {
    this.selectedCode.set(code);
  }

  close() {
    this.ref.close();
  }
}
