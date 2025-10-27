import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-welcome-slide',
  templateUrl: './welcome.slide.html',
  styleUrl: './welcome.slide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeSlide {}
