import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-verdict-slide',
  templateUrl: './verdict.slide.html',
  styleUrl: './verdict.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerdictSlide {
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
