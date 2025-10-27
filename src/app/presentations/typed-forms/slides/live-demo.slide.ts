import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RegistrationDemoComponent } from '../demo/registration-demo.component';
import {
  registrationFormEnums,
  registrationFormOptions,
  contactFormTs,
  situationFormTs,
  registrationFormTs,
  registrationDemoComponentTs,
  registrationDemoComponentHtml,
  registrationDemoComponentScss
} from '../generated-code.constants';

@Component({
  selector: 'app-live-demo-slide',
  templateUrl: './live-demo.slide.html',
  styleUrl: './live-demo.slide.scss',
  imports: [Highlight, DialogModule, ButtonModule, RegistrationDemoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveDemoSlide {
  showCodeDialog = signal(false);
  selectedCode = signal<'enums' | 'options' | 'contact' | 'situation' | 'registration' | 'component' | 'template' | 'styles'>('enums');

  codeMap = {
    enums: { content: registrationFormEnums, label: 'Enums', language: 'typescript' },
    options: { content: registrationFormOptions, label: 'Options', language: 'typescript' },
    contact: { content: contactFormTs, label: 'ContactForm', language: 'typescript' },
    situation: { content: situationFormTs, label: 'SituationForm', language: 'typescript' },
    registration: { content: registrationFormTs, label: 'RegistrationForm', language: 'typescript' },
    component: { content: registrationDemoComponentTs, label: 'Component TS', language: 'typescript' },
    template: { content: registrationDemoComponentHtml, label: 'Template', language: 'html' },
    styles: { content: registrationDemoComponentScss, label: 'Styles', language: 'scss' }
  };

  get currentCode() {
    return this.codeMap[this.selectedCode()];
  }

  openCodeDialog() {
    this.showCodeDialog.set(true);
  }

  closeCodeDialog() {
    this.showCodeDialog.set(false);
  }

  selectCode(code: 'enums' | 'options' | 'contact' | 'situation' | 'registration' | 'component' | 'template' | 'styles') {
    this.selectedCode.set(code);
  }
}
