import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-lint-rule-slide',
  templateUrl: './lint-rule.slide.html',
  styleUrl: './lint-rule.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LintRuleSlide {
  eslintConfig = signal(`// .eslintrc.json ou eslint.config.js
{
  "rules": {
    // Interdire les variables non-signal dans les composants
    "@angular-eslint/prefer-signals": "error",

    // Interdire le pipe async dans les templates
    "@angular-eslint/template/no-async-pipe": "error",

    // Forcer l'utilisation de input() au lieu de @Input
    "@angular-eslint/prefer-standalone": "error",

    // Forcer l'utilisation de output() au lieu de @Output
    "@angular-eslint/prefer-output-readonly": "error"
  }
}`);
}
