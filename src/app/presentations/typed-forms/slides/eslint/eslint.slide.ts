import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-eslint-slide',
  templateUrl: './eslint.slide.html',
  styleUrl: './eslint.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EslintSlide {
  eslintRule = `{
  "rules": {
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "@angular/forms",
            "importNames": ["FormBuilder"],
            "message": "Utiliser 'FormGroup', 'FormControl' et 'FormArray' directement"
          }
        ]
      }
    ]
  }
}`;
}
