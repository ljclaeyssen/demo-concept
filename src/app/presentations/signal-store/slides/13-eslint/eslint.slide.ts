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
            "name": "@ngrx/store",
            "message": "Utiliser '@ngrx/signals' (SignalStore) à la place"
          },
          {
            "name": "@ngrx/effects",
            "message": "Utiliser '@ngrx/signals' (SignalStore) à la place"
          }
        ]
      }
    ]
  }
}`;
}
