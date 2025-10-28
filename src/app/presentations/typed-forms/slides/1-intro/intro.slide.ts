import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-intro-slide',
  templateUrl: './intro.slide.html',
  styleUrl: './intro.slide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroSlide {
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
