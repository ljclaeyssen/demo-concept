import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-title-slide',
  templateUrl: './title.slide.html',
  styleUrl: './title.slide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleSlide {}
