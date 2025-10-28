import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-demo-context-slide',
  templateUrl: './demo-context.slide.html',
  styleUrl: './demo-context.slide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoContextSlide {}
